import * as express from 'express';
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

import ParkingLots from './data/parkinglots';

const lots: any = ParkingLots;

var ParkingLotStatus: GraphQLEnumType = new GraphQLEnumType({
    name: 'ParkingloT_Status',
    values: {
        FREE : {value: 0},
        OCUPIED : {value: 1}
    }
});

const ParkingLot: GraphQLObjectType = new GraphQLObjectType({
    name: "ParkingLot",
    description: "This represents a parking lot",
    fields: () => ({
        _id: {type: new GraphQLNonNull(GraphQLString)},
        number: {type: new GraphQLNonNull(GraphQLInt)},
        status: {type: new GraphQLNonNull(ParkingLotStatus)}
    })
});



const Mutation: GraphQLObjectType = new GraphQLObjectType({
  name: "ParkingLotMutation",
  description: "Mutations of parkinglots",
  fields: () => ({
    createParkingsLot: {
      type: ParkingLot,
      args: {
        number: {type: GraphQLInt}
      },
      resolve: (source, args) => {
        let parkingLot = {};

        parkingLot['_id'] = `bla`;
        parkingLot['number'] = args.number;
        parkingLot['status'] = ParkingLotStatus.FREE;
        lots.push(parkingLot);
		
        return parkingLot;
      }
    }
  })
});

const Query: GraphQLObjectType = new GraphQLObjectType({
    name: 'RootQueries',
    fields: () => ({
        parkinglots: {
            type: new GraphQLList(ParkingLot),
            resolve: () => {
                return lots;
            }
        }
    })
});

const Schema: GraphQLSchema = new GraphQLSchema({
    query: Query,
	mutation: Mutation
});

let query: string = `{
    received: parkinglots {
        number
    }
}`;

graphql(Schema, query).then((result) => {
    console.log(result);
});


var app: express.Application = express();
app.use('/graphql', graphqlHTTP({
 schema: Schema,
 graphiql: true
}));
app.listen(4001, () => console.log('works'));