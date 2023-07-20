const swaggerJsdoc = require('swagger-jsdoc')
const fs = require('fs')
const swaggerComponents = require('./components.json')

const outputFile = './docs/swagger.json'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
  },
  apis: ['./docs/*.js', './build/src/routes/**/*.js'], // files containing annotations as above
}

const openapiSpecification = swaggerJsdoc(options)
openapiSpecification.components = swaggerComponents.components
console.log(openapiSpecification)
fs.writeFileSync(outputFile, JSON.stringify(openapiSpecification))
