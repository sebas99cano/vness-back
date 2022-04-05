const mongoose = require('mongoose')
const connectionString = "mongodb+srv://sebas99cano:cc1036683131@cluster0.xbrir.mongodb.net/vness?retryWrites=true&w=majority"
const { model, Schema } = mongoose
//conexión a mongoDB

mongoose.connect(connectionString).then(() => {
    console.log("DataBase connected");
}).catch((error) => {
    console.log(error);
})

const noteSchema = new Schema({
    tittle: String,
    description: String,
    date: Date,
    important: Boolean
})

const Note = model('Note', noteSchema)

Note.find({}).then((result) => {
    console.log(result);
    mongoose.connection.close()
}).catch((error) => {
    console.log(error);
})

const note = new Note({
    "tittle": "titulo 3",
    "description": "descripción numero 1",
    "important": true,
    "date": 1002019212,
})

note.save().then((result) => {
    console.log(result);
    mongoose.connection.close()
}).catch((error) => {
    console.log(error);
})