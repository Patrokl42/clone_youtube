const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

mongoose.connect(process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useFindAndModify: false
  }
);

const db = mongoose.connection

const handleOpen = () => {
  console.log('Connected To db')
}

const handleError = (error) => {
  console.log(`Error on db: ${error}`)
}

db.once('open', handleOpen)
db.on('error', handleError)