// Buscar usuarios como Uriel, Eduardo, Marines

// Búsqueda con el operador lógico or
db.users.find({$or:[{name: 'Eduardo'},{name: 'Uriel'},{name: 'Marines'}]}).pretty()

// Búsqueda en una lista
db.users.find({name: {$in: ['Eduardo','Uriel','Marines']}}).pretty()