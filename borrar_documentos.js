/* remove -> elimina documentos de la db que le pasemos como parámetro
En caso de no colocar un argumento borrará todos los documentos de la db */

db.users.remove({ name: 'Luis' })

// drop() -> elimina la colección que le indiquemos, regresa true o false
// db.books.drop()
// db.dropDatabase()
