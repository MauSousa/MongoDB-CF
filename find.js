// Metodo find
db.users.find({ age: 25 }, { name: true, email: true, _id: false }).pretty() // buscamos a los usuarios con edad 25

// Obtener todos los atributos menos la edad de los usuarios cuya edad sea 25
db.users.find({ age: 25 }, { age: false }).pretty()
