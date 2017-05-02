"use strict";
exports.__esModule = true;
var express = require("express");
var graphqlHTTP = require("express-graphql");
var graphql_1 = require("graphql");
var buildings_1 = require("./data/buildings");
var buildings = buildings_1["default"];
var ParkingLotStatus = new graphql_1.GraphQLEnumType({
    name: 'ParkingloT_Status',
    values: {
        UNKNOWN: { value: 0 },
        FREE: { value: 1 },
        OCUPIED: { value: 2 }
    }
});
var ParkingLotType = new graphql_1.GraphQLEnumType({
    name: 'ParkingloT_Type',
    values: {
        CAR: { value: 0 },
        DISABLED: { value: 1 },
        ELECTRIC: { value: 2 },
        MOTORCYCLE: { value: 3 }
    }
});
var ParkingLot = new graphql_1.GraphQLObjectType({
    name: "ParkingLot",
    description: "This represents a parking lot",
    fields: function () { return ({
        _id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        number: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        status: { type: new graphql_1.GraphQLNonNull(ParkingLotStatus) },
        type: { type: new graphql_1.GraphQLNonNull(ParkingLotType) }
    }); }
});
var Level = new graphql_1.GraphQLObjectType({
    name: "Level",
    description: "This represents a parking level (e.g. level 0, level -1)",
    fields: function () { return ({
        _id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        name: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        level: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        parkingLots: { type: new graphql_1.GraphQLList(ParkingLot) }
    }); }
});
var Building = new graphql_1.GraphQLObjectType({
    name: "Building",
    description: "This represents a building (e.g. Zühlke Eschborn Tiefgarage)",
    fields: function () { return ({
        _id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        name: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        levels: { type: new graphql_1.GraphQLList(Level) }
    }); }
});
var Mutation = new graphql_1.GraphQLObjectType({
    name: "BuildingMutation",
    description: "Mutations of buildings",
    fields: function () { return ({
        createBuilding: {
            type: Building,
            args: {
                name: { type: graphql_1.GraphQLInt }
            },
            resolve: function (source, args) {
                var building = {};
                building['_id'] = Math.round(Math.random() * 1000000000).toString();
                building['name'] = args.name;
                building['levels'] = [];
                buildings.push(building);
                return building;
            }
        }
    }); }
});
var Query = new graphql_1.GraphQLObjectType({
    name: 'RootQueries',
    fields: function () { return ({
        buildings: {
            type: new graphql_1.GraphQLList(Building),
            resolve: function () {
                return buildings;
            }
        }
    }); }
});
var Schema = new graphql_1.GraphQLSchema({
    query: Query,
    mutation: Mutation
});
var query = "{\n    received: buildings {\n        name\n    }\n}";
graphql_1.graphql(Schema, query).then(function (result) {
    console.log(result);
});
var app = express();
app.use('/graphql', graphqlHTTP({
    schema: Schema,
    graphiql: true
}));
app.listen(4001, function () { return console.log('works'); });
