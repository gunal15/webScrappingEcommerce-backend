const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const dbName = 'webscraper'
const dbURL = `mongodb+srv://gunal15:C0o7vB5bNY9LZaJX@cluster0.orkw7uh.mongodb.net/${dbName}`;

module.exports={dbURL,mongodb,MongoClient,dbName}
