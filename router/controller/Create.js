const urlObj = require("../../models/urlObj")


async function CreateLink(req, res, next) {
    const obj = {
        _id: req.body.domain.toLowerCase(),
        url: req.body.url,
        domain: req.body.domain.toLowerCase(),
        click: 0
    }
    await urlObj.create(obj)
    res.redirect('/')
}


module.exports = {CreateLink}
