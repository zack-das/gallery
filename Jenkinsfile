pipeline {
    agent any

    environment {
        RENDER_DEPLOY_HOOK = credentials('render-deploy-hook')
        SLACK_WEBHOOK = credentials('slack-token')
        
        MONGO_URI_PROD = credentials('mongo-uri-prod')
        MONGO_URI_DEV  = credentials('mongo-uri-dev')
        MONGO_URI_TEST = credentials('mongo-uri-test')

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
        withCredentials([
            string(credentialsId: 'mongo-uri', variable: 'MONGO_URI'),
            string(credentialsId: 'slack-token', variable: 'SLACK_TOKEN')]) 
        {
            sh """
            curl -X POST https://slack.com/api/chat.postMessage \
              -H "Authorization: Bearer $SLACK_TOKEN" \
              -H "Content-Type: application/json" \
              --data '{
                "channel": "#zack-ip1",
                "text": "Build #${BUILD_NUMBER} deployed successfully!\\nView it here: ${RENDER_URL}"
              }'
            """
        }
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


