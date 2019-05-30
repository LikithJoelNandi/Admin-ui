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
        sh 'npm install'
    }
    stage("Build & Unit Tests") {
			steps{
				script{
			def nodeJs = tool 'nodejs';
			sh "${nodeJs}/npm install ${build_command_install}"

				}
			}
		}
}
