#!groovy

pipeline {
	agent any

	options{
		skipDefaultCheckout(true)
	}
  stage('Check Out') {
        checkout scm
    }
  stage('Installing NodeModules') {
        sh 'npm install'
    }
    stage('Build') {
        sh 'ng build --prod'
    }
    stage("SonarQube") {
			steps{
				script{
					def scannerHome = tool 'sonarqubescanner';

					withSonarQubeEnv('Sonar Server') {
						sh "${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=${sonar_projectKey} -Dsonar.projectName=${sonar_projectName} -Dsonar.sources=${sonar_sources}  -Dsonar.typescript.lcov.reportPaths=${js_sonar_code_coverage_location} "

						sh "cat .scannerwork/report-task.txt"
						def props = readProperties  file: '.scannerwork/report-task.txt'
						echo "properties=${props}"
						def sonarServerUrl=props['serverUrl']
						def ceTaskUrl= props['ceTaskUrl']

						def ceTask

						timeout(time: 1, unit: 'MINUTES') {
							waitUntil {
								def response = httpRequest ceTaskUrl
								ceTask = readJSON text: response.content
								echo ceTask.toString()
								return "SUCCESS".equals(ceTask["task"]["status"])
							}
						}

						def response2 = httpRequest url : sonarServerUrl + "/api/qualitygates/project_status?analysisId=" + ceTask["task"]["analysisId"], authentication: 'sonar-quality-auth'
						def qualitygate =  readJSON text: response2.content
						echo qualitygate.toString()

						/*if ("ERROR".equals(qualitygate["projectStatus"]["status"])) {
							error  "Quality Gate failure"
						}*/

					}
				}
			}
		}
    stage('Test') {
        sh 'ng run test -headless'
    }
}
