# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

* Summary of set up
* Configuration
* Dependencies
* Database configuration
* How to run tests
* Deployment instructions

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact

### start command in window (package.json)
* \"ts-node\"
### start command in Linux MacOS (package.json)
* 'ts-node'


### Swagger ###
- npm install swagger-ui-express --save
- config tsconfig.json add         
    - "resolveJsonModule": true,
    - "esModuleInterop": true
- in config/express.ts 
    import swaggerUi from "swagger-ui-express"
    import * as swaggerDocument from "./swagger.json"
    this.express.use('/swagger',swaggerUi.serve,swaggerUi.setup(swaggerDocument))
- go to localhost:4400/swagger it navigate you to swagger ui  
- https://www.youtube.com/watch?v=qemG0CWOx1I


