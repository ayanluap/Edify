const express = require('express')
const Router = express.Router()

const AdminControl = require('../controller/Admin.controller')

Router.get('/login', AdminControl.postLogin)

Router.get('/home', (req, res, next) => {
    res.render('home')
})

Router.get('/calendar', (req, res, next) => {
    res.render('calendar')
})

Router.get('/bus', (req, res, next) => {
    res.render('bus')
})


module.exports = Router