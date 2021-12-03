const { Router } = require('express')
const Student = require('../models/student')
const router = Router()

router.get('/', (req, res) => {
  res.render('add', {
    title: 'Добавить студента',
    isAdd: true
  })
})

router.post('/', async (req, res) => {
  console.log(req.body)
  //add db
  const student = new Student(req.body.lastname, req.body.firstname, req.body.patronymic, req.body.age, req.body.group)
  await student.save()
  res.redirect('/students')
})

module.exports = router

