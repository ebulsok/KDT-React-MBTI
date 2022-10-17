const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MDB_URL;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = client;
