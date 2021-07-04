// Con el operador $sort podemos ordenar las listas
// Usaremos la db users y que los elementos tengan la propiedad "scores"

db.users.updateOne({name: 'Fernando'},{$push:{scores:{$each:[10,10],$sort:1}}})

db.users.updateOne({name: 'Uriel'},{$push:{scores:{$each:[7,7],$sort:-1}}})
