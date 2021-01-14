const express = require('express')
const morgan = require('morgan')


const app = express()

app.use(morgan('dev'))

app.use(express.static('public'))

// set view engine to ejs
app.set('view engine', 'ejs')

// Contact page route
app.get('/contact', (req, res) => {
    res.render('pages/contact')
})

// Blog page route
app.get('/blog', (req, res) => {
    res.render('pages/blog')
})

// Product page route
app.get('/product', (req, res) => {
    res.render('pages/product')
})

// About page route
app.get('/about', (req, res) => {
    res.render('pages/about')
})

// index page route
app.get('/', (req, res) => {
    res.render('pages/index')
})

app.listen(4000, () => {
    console.log('Applicatin is Running in PORT: 4000');
})
