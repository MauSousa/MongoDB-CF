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

// $all -> nos permite hacer búsquedas dentro de listas
// $all funciona como el operador and, las condiciones que pongamos deben ser verdaderas
// Ejercicio: obtener todos los usarios que posean por curso MongoDB
db.users.find({courses: { $all: ['MongoDB'] }}).pretty()

// Ejercicio: obtener todos los usarios que posean por curso MongoDB o SQL
db.users.find({courses: { $all: ['MongoDB','SQL'] }}).pretty()

// Multiples condiciones
db.users.find({courses: 'SQL'}).pretty()

// operador $and
db.users.find({$and: [{courses: 'SQL'},{courses:'MongoDB'}]}).pretty()

// Operador $or
db.users.find({$or: [{courses: 'SQL'},{courses:'Git'}]}).pretty()

