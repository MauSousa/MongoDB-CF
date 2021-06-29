// $rename -> renombra alguna propiedad del documento
db.users.updateMany({}, { $rename: { last_name: 'lastName' } })
