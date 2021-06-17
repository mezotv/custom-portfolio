// Imports
const express = require("express")
const app = express()
let port = 8880

// Static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

// Views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
    res.render('index')
})
app.get('/github', (req, res) => {
    res.redirect('https://github.com/mezotv')
})
// Port listen
app.listen(port, () => console.info(`Listening on port ${port}`))
