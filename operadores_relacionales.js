// Operadores relacionales

// $ne -> diferente a
// obtenemos todos los usuarios cuya edad sea diferente a 25
db.users.find({ age: { $ne: 25 } }).pretty()

//$eq -> igual a
db.users.find({ age: { $eq: 25 } }).pretty()

// El método find regresa uno o más de un documento, si queremos regresar un solo documento, utilizaremos finOne()
db.users.findOne({ age: { $ne: 25 } })

//$gt -> greater than
// Obtener todos los usuarios cuya edad sea mayor a 20
db.users.find({ age: { $gt: 20 } }).pretty()

// $gte -> greater than equal
// Obtener todos los usuarios cuya edad sea mayor o igual a 26
db.users.find({ age: { $gte: 26 } }).pretty()

// Obtener todos los usuarios cuya edad sea menor o igual a 26
// $lte -> lower than equal
db.users.find({ age: { $lte: 26 } }).pretty()

// Obtener todos los usuarios cuya edad sea menor a 25
// $lt -> lower than
db.users.find({ age: { $lt: 25 } }).pretty()
