pipeline {
    agent any

    // environment {
    //     RENDER_DEPLOY_HOOK = credentials('render-deploy-hook')
    // }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
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

        stage('Optional Smoke Test') {
            steps {
                sh '''
                    node server &
                    sleep 5
                    kill $!
                '''
            }
        }

        // stage('Deploy to Render') {
        //     steps {
        //         sh '''
        //             curl -X POST $RENDER_DEPLOY_HOOK
        //         '''
        //     }
        // }
    }
}