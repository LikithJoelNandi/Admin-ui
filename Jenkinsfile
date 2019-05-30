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
    stage('Build') {
        sh 'ng build --prod'
    }
    stage ('Copy Artifact to Deployment Server') { 
          withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: '1cbeac72-4505-4a87-9bbe-de92a95b9217', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
  //          sh 'sshpass -p $PASSWORD ssh -t root@10.118.169.49 | sshpass -p "password" scp user@remote-machine:/home/QA.txt /home/faadmin/'
              sh 'sshpass -p $PASSWORD scp -r /var/lib/jenkins/workspace/Admin-ui/dist root@10.118.169.49:/root/Admin-ui/'
              sh 'sshpass -p $PASSWORD scp /var/lib/jenkins/workspace/Admin-ui/Dockerfile root@10.118.169.49:/root/Admin-ui/'
              sh 'sshpass -p $PASSWORD scp /var/lib/jenkins/workspace/Admin-ui/docker.sh root@10.118.169.49:/root/Admin-ui/'
              sh "sshpass -p $PASSWORD ssh root@10.118.169.49 'chmod a+x /root/Admin-ui/docker.sh; /root/Admin-ui/docker.sh'"
          }
        }
}
