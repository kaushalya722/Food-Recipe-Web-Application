const mongoose = require('mongoose');

const connectionDB = async () => {
    await mongoose.connect(process.env.DB_URL)
    .then(() => console.log('Connected...')
    )
}
 module.exports=connectionDB;