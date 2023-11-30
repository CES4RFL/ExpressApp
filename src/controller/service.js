import express from 'express'

const app = express()

app.use(express.json())
app.post('/operation', async (req, res) => {
  const { n1, n2 } = req.body

  let result =  n1+n2

  res.send({ result : result })
})

export default app