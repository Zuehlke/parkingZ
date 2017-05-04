import * as express from 'express';
import * as cors from 'cors';
import * as graphqlHTTP from 'express-graphql'
import {
    // These are the basic GraphQL types
    GraphQLInt,
    GraphQLFloat,
    GraphQLString,
    GraphQLList,
    GraphQLObjectType,
    GraphQLEnumType,
    GraphQLNonNull,
    GraphQLSchema,
    graphql
} from 'graphql';

import Buildings from './data/buildings';

const buildings: any[] = Buildings;

var ParkingLotStatus: GraphQLEnumType = new GraphQLEnumType({
    name: 'ParkingloT_Status',
    values: {
        UNKNOWN: { value: 0 },
        FREE: { value: 1 },
        OCUPIED: { value: 2 }
    }
});

var ParkingLotType: GraphQLEnumType = new GraphQLEnumType({
    name: 'ParkingloT_Type',
    values: {
        CAR: { value: 0 },
        DISABLED: { value: 1 },
        ELECTRIC: { value: 2 },
        MOTORCYCLE: { value: 3 }
    }
});

const ParkingLot: GraphQLObjectType = new GraphQLObjectType({
    name: "ParkingLot",
    description: "This represents a parking lot",
    fields: () => ({
        _id: { type: new GraphQLNonNull(GraphQLString) },
        number: { type: new GraphQLNonNull(GraphQLInt) },
        status: { type: new GraphQLNonNull(ParkingLotStatus) },
        type: { type: new GraphQLNonNull(ParkingLotType) }
    })
});

const Level: GraphQLObjectType = new GraphQLObjectType({
    name: "Level",
    description: "This represents a parking level (e.g. level 0, level -1)",
    fields: () => ({
        _id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        level: { type: new GraphQLNonNull(GraphQLInt) },
        parkingLots: { type: new GraphQLList(ParkingLot) }
    })
});

const Building: GraphQLObjectType = new GraphQLObjectType({
    name: "Building",
    description: "This represents a building (e.g. Zühlke Eschborn Tiefgarage)",
    fields: () => ({
        _id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        levels: { type: new GraphQLList(Level) }
    })
});

const Mutation: GraphQLObjectType = new GraphQLObjectType({
    name: "BuildingMutation",
    description: "Mutations of buildings",
    fields: () => ({
        createBuilding: {
            type: Building,
            args: {
                name: { type: GraphQLInt }
            },
            resolve: (source, args) => {
                let building = {};

                building['_id'] = Math.round(Math.random() * 1000000000).toString();
                building['name'] = args.name;
                building['levels'] = [];
                buildings.push(building);

                return building;
            }
        }
    })
});
 
const Query: GraphQLObjectType = new GraphQLObjectType({
    name: 'RootQueries',
    fields: () => ({
        buildings: {
            type: new GraphQLList(Building),
            resolve: () => {
                return buildings;
            }
        },
        building: {
            type: new GraphQLList(Building),
            args: {
                id: {
                    name: '_id',
                    type: new GraphQLNonNull(GraphQLString)
                }
            },
            resolve: (root, {id}, source, fieldASTs) => {
                return buildings.filter(b => b._id === id);
            }
        }
    })
});

const Schema: GraphQLSchema = new GraphQLSchema({
    query: Query,
    mutation: Mutation
});

let query: string = `{
    received: buildings {
        name
    }
}`;

graphql(Schema, query).then((result) => {
    console.log(result);
});


var app: express.Application = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema: Schema,
    graphiql: true
}));
app.listen(4001, () => console.log('works'));