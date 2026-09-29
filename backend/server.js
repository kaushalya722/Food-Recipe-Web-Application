const express = require('express');
const dotenv = require('dotenv').config()
const App = express();
const connectionDB = require('./config/connectionDB')
const PORT = process.env.PORT || 3000;
const cors = require("cors");

App.use(express.json())
App.use(cors());
App.use(express.static("public"))

App.use("/", require("./routes/user"))
App.use('/recipe', require("./routes/recipe"))
connectionDB();





App.listen(PORT, () => console.log(`Server is running on port ${PORT}`));