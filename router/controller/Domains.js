const dotenv = require('dotenv');
const path = require('path');

const urlObj = require("../../models/urlObj");

dotenv.config({ path : path.join(__dirname,'../../.env') });
const APP_DOMAIN = process.env.APP_DOMAIN

async function Domains(req, res, next) {
    const domains = await urlObj.find()
    const message = req.query
    res.render('index', {domains, APP_DOMAIN, message})
}

async function GotoLink(req, res, next) {
    const url = await urlObj.findOne({ domain: req.params.subdomain })
    if (url) {
        url.click++
        url.save()
        res.redirect(url.url)
    }
    else {
        res.sendStatus(404)
    }
}

module.exports = {Domains,GotoLink}