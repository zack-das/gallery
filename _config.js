// var config = {}

// // Update to have your correct username and password
// config.mongoURI = {
// // <<<<<<< HEAD
// //     production: 'mongodb+srv://izackdas_db_user:zQ3yoggbSoeVJZba@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
// //     development: 'mongodb+srv://izackdas_db_user:zQ3yoggbSoeVJZba@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
// //     test: 'mongodb+srv://izackdas_db_user:zQ3yoggbSoeVJZba@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
// // =======
//     production: 'mongodb+srv://izackdas_db_user:9wFuCdAggY2z3qWO@cluster0.ootlczi.mongodb.net/darkroom?retryWrites=true&w=majority',
//     development: 'mongodb+srv://izackdas_db_user:9wFuCdAggY2z3qWO@cluster0.ootlczi.mongodb.net/darkroom?retryWrites=true&w=majority',
//     test: 'mongodb://127.0.0.1:27017/darkroom-test',
// }
// module.exports = config;


var config = {}

config.mongoURI = {
  production: process.env.MONGO_URI_PROD,
  development: process.env.MONGO_URI_DEV,
  test: process.env.MONGO_URI_TEST
}

module.exports = config;