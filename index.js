const express = require('express')
const cors = require('cors')
const logger = require('./loggerMiddleware')

const app = express()
app.use(express.json())
app.use(cors())
app.use(logger)

let notes = [{
    "id": "1",
    "tittle": "titulo 3",
    "description": "descripción numero 1",
    "important": true,
    "date": 1002019212,
},
{
    "id": "2",
    "tittle": "titulo 2",
    "description": "descripción numero 2",
    "important": false,
    "date": 1002019212,
},
{
    "id": "3",
    "tittle": "titulo 3",
    "description": "descripción numero 3",
    "important": false,
    "date": 1002019212,
}]

app.get('/', (request, response) => {
    response.send("<h1>hello world</h1>")
})

app.get('/api/notes', (request, response) => {
    response.json(notes)
})

app.get('/api/notes/:id', (request, response) => {
    const id = request.params.id
    const note = notes.find((note) => note.id === id)
    console.log(note);
    if (note) {
        response.json(note)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/notes/:id', (request, response) => {
    const id = request.params.id
    notes = notes.filter((note) => note.id !== id)
    response.status(204).end()
})

app.post('/api/notes/', (request, response) => {
    const note = request.body
    if (!note || !note.description) {
        return response.status(400).json({ error: 'note.content is missing' })
    }
    notes.push(note)
    response.json(note)
})

app.use((request, response) => {
    response.status(404).json({ error: 'Not found 404' })
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
