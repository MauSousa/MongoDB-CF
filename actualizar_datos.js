var rafael = db.users.findOne({ name: 'Rafael' })

// De la variable que se creó, accedemos al atributo que queremos cambiar y le asignamos con un igual el nuevo valor
rafael.support = false

// Esto no persiste en la base, solo en el objeto, para persistir en la base utilizaremos el método save, mejor usar los métodos updateOne o updateMany
db.users.save(rafael)

// Le pondremos edad a rafael
rafael.age = 27

db.users.save(rafael)

// actualizar los datos que ya tenemos con los atributos created_at y support
db.users.updateMany(
  { support: { $exists: false } },
  { $set: { support: false } }
)

db.users.updateOne({ name: 'Fernando' }, { $set: { support: true } })

// Eliminar atributos de algún documento
db.users.updateOne(
  { created_at: { $exists: true } },
  { $unset: { created_at: true } }
)

// $inc -> incrementa el valor de un número entero que especifiquemos

// Incrementa en 1 la edad de Rafael
db.users.updateOne({ name: 'Rafael' }, { $inc: { age: 1 } })

// Decrementa en 1 la edad de Rafael
db.users.updateOne({ name: 'Rafael' }, { $inc: { age: -1 } })

// upsert -> update un dato si no sabemos si existe o no

db.users.updateOne({ name: 'Luis' }, { $set: { age: 28 } }, { upsert: true })

db.users.updateOne({ name: 'Luis' }, { $inc: { age: -1 } })
