"use strict";
exports.__esModule = true;
// import * as express from 'express';
// import * as graphqlHTTP from 'express-graphql'
var graphql_1 = require("graphql");
var query = new graphql_1.GraphQLObjectType({
    name: 'RootQueries',
    fields: function () { return ({
        echo: {
            type: graphql_1.GraphQLString,
            args: {
                message: { type: graphql_1.GraphQLString }
            },
            resolve: function (rootValue, args) {
                return "received: " + args.message;
            }
        }
    }); }
});
var schema = new graphql_1.GraphQLSchema({
    query: query
});
graphql_1.graphql(schema, query).then(function (result) {
    console.log(result);
});
// var app: express.Application = express();
// app.use('/graphql', graphqlHTTP({
//  schema: schema,
//  graphiql: true
// }));
// app.listen(4001, () => console.log('works')); 
