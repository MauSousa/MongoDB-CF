db.users.updateOne(
  {
    name: 'Eduardo',
  },
  {
    $set: {
      courses: ['Python', 'MongoDB', 'SQL', 'Java'],
    },
  }
)

db.users.updateOne(
  {
    name: 'Rafael',
  },
  {
    $set: {
      courses: ['Git', 'Escritura para programadores', 'Redes'],
    },
  }
)

// Obtener al usuario que posea los cursos de Python, MongoDB, SQL y Java
db.users.findOne({
  courses: ['Python', 'MongoDB', 'SQL', 'Java'],
})
