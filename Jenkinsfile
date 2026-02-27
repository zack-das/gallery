pipeline {
    agent any

    environment {
        RENDER_DEPLOY_HOOK = credentials('render-deploy-hook')
        SLACK_WEBHOOK     = credentials('slack-webhook')
        RENDER_URL        = 'https://gallery-78pq.onrender.com'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'master',
                    url: 'https://github.com/zack-das/gallery.git'
            }
        }

        stage('Verify Node') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy to Render') {
            steps {
                sh 'curl -X POST "$RENDER_DEPLOY_HOOK"'
            }
        }
    }

    post {

        success {
            sh """
            curl -X POST -H 'Content-type: application/json' \
            --data '{
              "text": "Build #${BUILD_NUMBER} deployed successfully!\\nView it here: ${RENDER_URL}"
            }' \
            $SLACK_WEBHOOK
            """
        }

        failure {
            emailext(
                subject: "Build FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: "Something went wrong. Check Jenkins immediately.",
                to: "izackdas@gmail.com"
            )
        }
    }
}