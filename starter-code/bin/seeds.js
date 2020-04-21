const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')

mongoose.connect('mongodb://localhost/starter-code', {
    useNewUrlParser: true
})

const celebrities = [
    {
        name: "Cardi B",
        occupation: "Rapper",
        catchPhrase: "Gurrrl"
    },
    {
        name: "Mona Chalabi",
        occupation: "Artist",
        catchPhrase: "TMI"
    },
    {
        name: "Little Dragon",
        occupation: "Musicians",
        catchPhrase: "New me, same us"
    }
]

Celebrity.insertMany(celebrities).then(data => {
    console.log("Yeas, congrats: you succeeded")
    mongoose.connection.close()
}).catch(error => {
    console.log("Unfortunately, this has happened: ", error)
})