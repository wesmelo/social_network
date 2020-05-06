const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

const connectDB = async () => {
  try {
    const con = await mongoose.connect(db, { 
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })

    console.log(`Database connected ${con.connection.host}`.brightGreen.dim)
  } catch (error) {
    console.error(error.message)

    process.exit(1)
  }
}

module.exports = connectDB