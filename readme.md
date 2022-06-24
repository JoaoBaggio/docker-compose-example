
<div align="center">
  <h1>Using Docker and Docker-compose for development</h1>
  <p> João Baggio</p>
</div>

## Intro
You must have node and docker/docker-compose
#### Install 
 ~~~bash
npm install 
 ~~~

#### Running docker-compose 
This will run the api on ports **15050** **5050**
postgres and redis will also run
This might take a few minutes
 ~~~bash
npm run up 
 ~~~    


#### Stopping  docker-compose
This will kill all process, but data will saved
 ~~~bash
npm run down 
 ~~~
