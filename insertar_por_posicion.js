// Podemos usar el operador $position con el operador $each para actualizar en la posicion que queremos
// $position toma un número entero para tomar la posicion
// Por default si no usamos $position, lo pondrá en la última posición
db.users.updateOne({name: 'Rafael'},{$push: {courses:{$each:['Base de datos'],$position: 0}}})
