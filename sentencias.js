// insertOne

var user2 = {
  name: 'Fernando',
  last_name: 'Garcia',
  age: 24,
  email: 'mail2@mail.com',
}

db.users.insertOne(user2)

// insertMany

var user3 = {
  name: 'Uriel',
  last_name: 'Camacho',
  age: 27,
  email: 'mail3@mail.com',
}

var user4 = {
  name: 'Marines',
  last_name: 'Méndez',
  age: 25,
  email: 'mail4@mail.com',
}

db.users.insertMany([user3, user4])
