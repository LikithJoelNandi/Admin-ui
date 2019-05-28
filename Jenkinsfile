#!groovyâ€‹
properties([[$class: 'jenkins.model.BuildDiscarderProperty', strategy: [$class: 'LogRotator',
                                                                        numToKeepStr: '10',
                                                                        artifactNumToKeepStr: '10']]])
node {
    step([$class: 'WsCleanup'])
    
    stage('Check Out') {
        checkout scm
    }
    stage('Installing NodeModules') {
        bat 'npm install'
    }
    stage('Build') {
        bat 'ng build --prod'
    }
    stage('Test') {
        bat 'npm run test-headless'
    }
}
