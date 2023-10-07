import express from 'express'

const app = express()

app.use(express.json())

app.listen(3306, () => {
    console.log("Connected");
})