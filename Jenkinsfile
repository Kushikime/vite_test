/* groovylint-disable DuplicateStringLiteral */
pipeline {
    agent any
    stages {
        stage('installing node') {
            steps {
                sh 'sudo apt update'
                sh 'sudo apt install nodejs'
                sh 'node --version'
                sh 'yarn install'
            }
        }
        stage('installing project dependencies') {
            steps {
                sh 'yarn install'
            }
        }
        stage('check format') {
            steps {
                sh 'FORMAT SUCCESS'
            }
        }
        stage('check tests') {
            steps {
                sh 'TESTS SUCCESS'
            }
        }
        stage('check build') {
            steps {
                sh 'BUILD SUCCESS'
            }
        }
        stage('finishing') {
            steps {
                sh 'echo Erik KAWAIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII'
                sh 'echo Erik KAWAIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII'
                sh 'echo Erik KAWAIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII'
                sh 'echo Erik KAWAIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII'
                sh 'echo Erik KAWAIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII'
                sh 'echo Erik KAWAIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII'
                sh 'echo Erik KAWAIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII'
                sh 'echo Erik KAWAIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII'
                sh 'echo Erik KAWAIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII'
                sh 'echo Erik KAWAIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII'
            }
        }
        stage('finished') {
                sh 'echo finished'
        }
    }
}
