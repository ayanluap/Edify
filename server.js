const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'hbs');   
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));   //post requests
app.use(express.static(path.join(__dirname, 'public')));  

//routes
const adminRoutes = require('./routes/Admin.routes')

app.get('/index', (req, res, next) => {
    res.render('index')
})

app.use('/admin', adminRoutes)


app.listen(8080, () => console.log('server started on http://localhost:8080'))
