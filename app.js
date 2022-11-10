// creacion de servidor

const { response } = require('express')
const  express = require('express')
const app = express()

app.listen(5000, () => {
  console.log('server running on localhost:5000...')
})

app.use(express.json())

// metodo get

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/', (request, response) => {
  response.status(200).send('Hello World!')
})

app.get('/', (request, response) => {
  response.status(200).json({user: 'Camilo', age: '25'})
})

app.post('/suma', (request, response) => {
  const { num1, num2 } = request.body
  const result = num1 + num2

  response.send({ message: result })
})

app.post('/resta', (request, response) => {
  const { num1, num2 } = request.body
  const result = num1 - num2
  num1 < num2 ? response.send({ message: 'num1 cannot be less than num2'}) : response.send({ message: result })
})

app.post('/multiplicacion', (request, response) => {
  let { num1, num2 } = request.body
  num1 = Math.floor(Math.random() * 101)
  num2 = Math.floor(Math.random() * 101)
  
  const result = num1 * num2

  response.send({ message: result })
})

app.post('/division', (request, response) => {
  const { num1, num2, num3, num4 } = request.body
  const total = num1 + num2 + num3 + num4
  const result = total / 4

  result  == undefined ?  response.send({message: '4 numbers are needed to complete this operation'}) : response.send( {message: Math.round(result)} )  
})