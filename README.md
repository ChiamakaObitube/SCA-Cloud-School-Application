# SCA Cloud School Application

A simple express application to display a webpage. This is in fulfillment of the technical assessment for the SCA Cloud engineering bootcamp programme

## Technologies
* NodeJS: an open source server framework that allows you to run JavaScript on the server.
* Express : A Nodejs framework designed for building web applications and APIs.
* Docker: A container platform that allows you to deploy an application and its dependencies only


## Link to Docker Repository
https://hub.docker.com/repository/docker/chiamakaobitube/sca-cloud-school-application

## Instructions
* Clone the repository
* Cd into the repository and checkout to the stable branch
* Run ```docker build --tag scacloud docker``` to build the docker image locally
* To test the application, use the command ```docker run --publish 3000:3000 scacloud``` 
* Run ```docker run --network="host" scacloud``` to run the container locally
* Note that the container runs on http:localhost:3000

### Building on the exisitng image
* You can pull this image directly from Docker Hun using the command ```docker pull chiamakaobitube/sca-cloud-school-application:v2.0.0```