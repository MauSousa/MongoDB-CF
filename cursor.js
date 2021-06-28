// find -> regresa un cursor

for (i = 0; i < 100; i++) {
  db.demo.insert({ name: 'user' + i })
}

// count -> obtener el numero de datos en la colección
/* Ejercicio: Obtener el numero de usuarios con correo "mail" */
db.users.find({ email: /mail/ }).count()

// limit -> limita el número de usuarios que queremos obtener, nos regresa un cursor
// Obtener los primeros dos documentos de la colección
db.demo.find().limit(2)

// skip -> se salta documentos
/* Ejercicio: Obtener el tercer usuario saltando a los primeros dos*/
db.demo.find().skip(2).limit(1)

// sort -> ordena los documentos
// 1 es ASC, -1 es DESC
/* Ejercicio: Ordenar los usuarios de forma alfabética */
db.users.find({}, { _id: false, name: true }).sort({ name: 1 })
db.users.find({}, { _id: false, name: true }).sort({ name: -1 })

// findAndModify -> regresa un documento y lo actualiza
// Regresa el objeto antes de actualizarlo, pero en la colección ya está actualizado
// Para que regrese el documento ya actualizado debemos poner al fina new: true
db.users.findAndModify({
  query: { name: 'Rafael' },
  update: { $inc: { age: 1 } },
})
db.users.findAndModify({
  query: { name: 'Rafael' },
  update: { $inc: { age: -2 } },
  new: true,
})
