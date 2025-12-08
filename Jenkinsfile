pipeline {
    agent any
    
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', credentialsId: 'github-cred', url: 'https://github.com/Abhilash4Devops/DevOps-demo.git'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devops-demo-app .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'docker run -d -p 3000:3000 --name demo-app devops-demo-app || true'
            }
        }
    }
}
