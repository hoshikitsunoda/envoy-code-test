const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost/envoy'
const express = require('express')
const app = express()

MongoClient.connect(url, (err, client) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  const dbName = 'envoyPhotos'

  const db = client.db(dbName);

  app.use(express.static('./public'))

  app.get('/envoyPhotos', (req, res) => {
    envoyPhotos
      .find({})
      .toArray()
      .then(response => {
        res.send(response)
      })
      .catch(err => {
        console.error(err)
      })
  })
  app.listen('3000', () => console.log('listening on port 3000!'))
})
