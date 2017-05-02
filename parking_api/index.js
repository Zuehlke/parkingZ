"use strict";
exports.__esModule = true;
var express = require("express");
var graphqlHTTP = require("express-graphql");
var graphql_1 = require("graphql");
var parkinglots_1 = require("./data/parkinglots");
var lots = parkinglots_1["default"];
var ParkingLotStatus = new graphql_1.GraphQLEnumType({
    name: 'ParkingloT_Status',
    values: {
        FREE: { value: 0 },
        OCUPIED: { value: 1 }
    }
});
var ParkingLot = new graphql_1.GraphQLObjectType({
    name: "ParkingLot",
    description: "This represents a parking lot",
    fields: function () { return ({
        _id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        number: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        status: { type: new graphql_1.GraphQLNonNull(ParkingLotStatus) }
    }); }
});
var Mutation = new graphql_1.GraphQLObjectType({
    name: "ParkingLotMutation",
    description: "Mutations of parkinglots",
    fields: function () { return ({
        createParkingsLot: {
            type: ParkingLot,
            args: {
                number: { type: graphql_1.GraphQLInt }
            },
            resolve: function (source, args) {
                var parkingLot = {};
                parkingLot['_id'] = "bla";
                parkingLot['number'] = args.number;
                parkingLot['status'] = ParkingLotStatus.FREE;
                lots.push(parkingLot);
                return parkingLot;
            }
        }
    }); }
});
var Query = new graphql_1.GraphQLObjectType({
    name: 'RootQueries',
    fields: function () { return ({
        parkinglots: {
            type: new graphql_1.GraphQLList(ParkingLot),
            resolve: function () {
                return lots;
            }
        }
    }); }
});
var Schema = new graphql_1.GraphQLSchema({
    query: Query,
    mutation: Mutation
});
var query = "{\n    received: parkinglots {\n        number\n    }\n}";
graphql_1.graphql(Schema, query).then(function (result) {
    console.log(result);
});
var app = express();
app.use('/graphql', graphqlHTTP({
    schema: Schema,
    graphiql: true
}));
app.listen(4001, function () { return console.log('works'); });
