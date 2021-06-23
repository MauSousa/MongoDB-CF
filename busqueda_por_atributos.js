// Obtener todos los usuarios que posean apellidos
db.users.find({ last_name: { $exists: true } }).pretty()

// Obtener todos los usuarios cuyo atributo created_at sea de tipo date
db.users.find({ created_at: { $type: 'date' } }).pretty()
