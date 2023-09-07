const mongoose = require('mongoose')

module.exports = async () => {
    const uri = "mongodb+srv://siddhantmahato03:ISPkSSTXDbElZhkU@form.rctjkvx.mongodb.net/?retryWrites=true&w=majority";
    //const uri = "mongodb+srv://siddhantmahato03:ISPkSSTXDbElZhkU@form.rctjkvx.mongodb.net/?retryWrites=true&w=majority";
    try {

        const client = await mongoose.connect(uri, {

            useNewUrlParser: true, useUnifiedTopology: true

        })
        console.log(`MongoDb connected :${client.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1)

    }
}