pipeline {
    agent any

     environment {

        RENDER_DEPLOY_HOOK = credentials('render-deploy-hook')
    }

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
        
        stage('Deploy to Render') {
            steps {
                sh '''
                    curl -X POST "$RENDER_DEPLOY_HOOK"
                '''
            }
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
        failure {
            emailext(
                subject: "Build FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: "Something went wrong. Check Jenkins immediately.",
                to: "your-email@gmail.com"
            )
        }
    }

    
}
