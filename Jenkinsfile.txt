pipeline {
    agent any
    
    stages {
        stage('Checkout Code') {
            steps {
                git credentialsId: 'github-cred', url: 'YOUR_REPO_URL'
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
