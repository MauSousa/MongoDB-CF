// Operadores lógicos

// Obtener todos los usuarios cuya edad sea mayor a 20 y menor a 26
// $and -> todas las condiciones se deben cumplir
db.users.find({ $and: [{ age: { $gt: 20 } }, { age: { $lt: 26 } }] }).pretty()

// Obtener todos los usarios cuyo nombre sea Eduardo o Uriel
// $or -> al menos una condición se debe cumplir
db.users.find({ $or: [{ name: 'Eduardo' }, { name: 'Uriel' }] }).pretty()

// Obtener todos los usuarios cuyo nombre sea Eduardo Ismael o Uriel, o que la edad sea mayor a 20 y menor a 25
db.users
  .find({
    $or: [
      { name: 'Eduardo Ismael' },
      { name: 'Uriel' },
      { $and: [{ age: { $gt: 20 } }, { age: { $lt: 25 } }] },
    ],
  })
  .pretty()
