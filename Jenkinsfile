pipeline {
    agent any

    environment {
        RENDER_DEPLOY_HOOK = credentials('render-deploy-hook')
    }

    stages {

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
}