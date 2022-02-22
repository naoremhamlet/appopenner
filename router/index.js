const Router = require('express').Router();
const { CreateLink } = require('./controller/Create');
const { Domains, GotoLink } = require('./controller/Domains');


Router.get("/", Domains);
Router.get("/s/:subdomain/", GotoLink);
Router.post('/create', CreateLink);


exports.Router = Router