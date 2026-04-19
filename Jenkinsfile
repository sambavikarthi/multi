pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "my-backend-app"
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    echo 'Building backend docker image...'
                    sh "docker build -t ${DOCKER_IMAGE}:latest ./backend"
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                script {
                    echo 'Starting architecture with Docker Compose...'
                    
                    // ✅ FIXED HERE
                    sh "docker compose up -d"
                }
            }
        }

        stage('Verify Deployment') {
            steps {
                script {
                    echo 'Verifying services...'
                    
                    sleep 10
                    
                    sh "curl http://localhost:3000/health || exit 1"
                    sh "curl http://localhost:9090/-/ready || exit 1"
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed.'
        }
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed. Check logs.'
        }
    }
}
