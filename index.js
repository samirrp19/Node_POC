import express from 'express'

const app = express ()
const PORT = process.env.port ?? 7000

app.get('/', (req, res) => {
    return res.json({ msg : 'Hello from the server, this is V1'})
})

app.listen(PORT, () => {
    console.log(`server is up and running on PORT ${PORT}`)
})
