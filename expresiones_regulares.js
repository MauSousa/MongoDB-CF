// Sales son en millones

db.books.insertMany (
  [
    {title: 'Don Quijote de la Mancha', sales: 500 },
    {title: 'Historia de dos Ciudades', sales: 200 },
    {title: 'El Señor de los Anillos', sales: 150 },
    {title: 'El Principito', sales: 140 },
    {title: 'El Hobbit', sales: 100 },
    {title: 'Alicia en el País de las Maravillas', sales: 230 },
    {title: 'El Código Da Vinci', sales: 80 },
    {title: 'El Alquimista', sales: 65 }
  ]
)

// Simular clausula like de SQL
// like -> expresión regular

// Obtener todos los libros cuyo título comience con la palabra "El"
db.books.find({title: /^El/}).pretty()

// Obtener todos los libros cuyo título finalice con la letra"S"
db.books.find({title: /s$/}).pretty()

// Obtener todos los libros cuyo título tenga la palabra con "La"
db.books.find({title: /la/}).pretty()
