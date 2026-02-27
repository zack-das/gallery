var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://izackdas_db_user:9wFuCdAggY2z3qWO@cluster0.ootlczi.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://izackdas_db_user:9wFuCdAggY2z3qWO@cluster0.ootlczi.mongodb.net/darkroom?retryWrites=true&w=majority',
    test: 'mongodb://127.0.0.1:27017/darkroom-test',
}
module.exports = config;
