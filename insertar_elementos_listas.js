// Para insertar elementos en una lista tenemos tres operadores $push, $pull, $pop

// Para este ejemplo, agregaremos nuevos cursos usando el operador $push
db.users.updateOne({name: 'Rafael'},{$push: {courses: 'Python'}})

// Para insertar varios datos al mismo tiempo se usa $push con $each
db.users.updateOne({name: 'Eduardo'},{$push:{courses:{$each:['Django','Rails','Rust']}}})
