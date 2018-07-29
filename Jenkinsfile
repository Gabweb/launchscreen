pipeline {
  agent {
    docker {
      image 'node:8-alpine'
    }
  }
  environment {
    FTP_USER = credentials('launchscreen-ftp-user')
    FTP_PASSWORD = credentials('launchscreen-ftp-pass')
    FONT_AWESOME_TOKEN = credentials('FONT_AWESOME_TOKEN')
    FTP_HOST = 'launchscreen.de'
  }
  stages {

    stage('Install') {
      steps {
        parallel(
          "frontend": {
            dir('frontend') {
              sh 'npm config set "@fortawesome:registry" https://npm.fontawesome.com/$FONT_AWESOME_TOKEN'
              sh 'npm install'
            }
          },
          "backend": {
            dir('backend') {
              sh 'npm install'
            }
          }
        )
      }
    }
    
    stage('Lint') {
      steps {
        parallel(
          "frontend": {
            dir('frontend') {
              sh 'npm run lint'
            }
          },
          "backend": {
            dir('backend') {
              sh 'npm run lint'
            }
          }
        )
      }
    }
    
    stage('Build') {
      steps {
        parallel(
          "frontend": {
            dir('frontend') {
              sh 'npm run build'
            }
          },
          "backend": {
            dir('backend') {
              sh 'cp config.json.example config.json'
              sh 'npm run build'
            }
          }
        )
      }
    }

    /*stage('Test') {
      steps {
        parallel(
          "frontend": {
            dir('frontend') {
              sh 'npm test'
            }
          }
        )
      }
    }*/

    /*stage('Deploy') {
      steps {
        parallel(
          "frontend": {
            dir('frontend') {
              sh 'node node_modules/gulp/bin/gulp.js deploy --user $FTP_USER --password $FTP_PASSWORD --host $FTP_HOST --branch $BRANCH_NAME'
            }
          }
        )
      }
    }*/

  }
}
