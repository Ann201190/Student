const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')

const homeRoutes = require('./routes/home')
const aboutRoutes = require('./routes/about')
const addRoutes = require('./routes/add')
const studentsRoutes = require('./routes/students')
const groupRoutes = require('./routes/groups')
const addgroupRoutes = require('./routes/addgroups')


const app = express();

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use('/', homeRoutes)
app.use('/about', aboutRoutes)
app.use('/add', addRoutes)
app.use('/students', studentsRoutes)
app.use('/addgroups', addgroupRoutes)
app.use('/groups', groupRoutes)


/*
app.get('/', (req, res) =>{
    //res.end('Hello')
    //res.sendFile(path.join(__dirname, 'views', 'index.html'))
    res.render('index', {
        title: 'Главная страница',
        isHome: true
    })
})

app.get('/about', (req, res) =>{
    //res.end('about')
    //res.sendFile(path.join(__dirname, 'views', 'about.html'))
    res.render('about', {
        title: 'О нас',
        isAbout: true
    })
})
*/

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})