const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const dbName = 'webscrapping'
const dbURL = `https://cloud.mongodb.com/v2/63d25c188fe4ef3b0c5c54f6#/metrics/replicaSet/63d25ce498dc420fe2fba995/explorer/webscraper`;

module.exports={dbURL,mongodb,MongoClient,dbName}
