const mongoose = require('mongoose')
//lsxS8w4qI1fUpzUx
const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://admin:lsxS8w4qI1fUpzUx@cluster0.uveqvsa.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true, // for avoiding deprication warning
            useUnifiedTopology: true,
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(`Error: ${error.message}`.red.bold)
        process.exit()
    }
}

module.exports = connectDB