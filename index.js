const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const wildcardSd = require('wildcard-subdomains');
const dotenv = require('dotenv');
const path = require('path');

const { Router } = require('./router');

const app = express();



dotenv.config({ path : path.join(__dirname,'./.env') });

const PORT = process.env.PORT || 8000;
const DB_URI = process.env.DB_URI


mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true})

app.set('view engine', 'ejs')
app.use(wildcardSd({ namespace: "s", whitelist: ["www", "app"] }));
app.use(express.urlencoded({ extended: false }));
app.use(cors())


app.use(Router)




app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});
