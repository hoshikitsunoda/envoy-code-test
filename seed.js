const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost/envoy'

MongoClient.connect(url, (err, client) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  const dbName = 'envoyPhotos'

  const db = client.db(dbName)

  db.collection.insertOne(
      { id: 1, url: 'upload/envoy-logo.png'}
    )
})
