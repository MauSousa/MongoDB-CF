db.users.updateOne({name: 'Fernando'},{$set:{scores: [9,8,9,5,10]}})
db.users.updateOne({name: 'Uriel'},{$set:{scores: [10,9,9,8,10]}})

// Ejercicio: Obtener todos los usarios que posean por lo menos una calificación de 10
db.users.find({scores: 10}).pretty()

// Ejercicio: Obtener todos los usarios que hayan reprobado por lo menos una calificación
db.users.find({scores: {$lt: 6}}).pretty()
