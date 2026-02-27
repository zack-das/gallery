ipeline {
    agent any

    environment {
        RENDER_DEPLOY_HOOK = credentials('render-deploy-hook')
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/jonnygovish/gallery.git'
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
                // If you want stricter CI behavior use:
                // sh 'npm ci'
            }
        }

        stage('Optional Smoke Test') {
            steps {
                sh '''
                    node server &
                    sleep 5
                    kill $!
                '''
            }
        }

        stage('Deploy to Render') {
            steps {
                sh '''
                    curl -X POST $RENDER_DEPLOY_HOOK
                '''
            }
        }
    }
}