import * as React from 'react';
import { NavMenu } from "./NavMenu";
import { ParkingLotCard } from "./ParkingLotCard";

export class App extends React.Component<undefined, void> {


    render() {

        const pageTitle = 'Welcome to the Parking Lot Management Tool';

        const levels: Level[] = [
            {
                _id: "1",
                level: 1,
                name: "Ebene 1",
                parkingLots: [
                    {
                        _id: "1",
                        number: 1,
                        status: 2,
                        type: 0
                    },
                    {
                        _id: "2",
                        number: 2,
                        status: 1,
                        type: 0
                    },
                    {
                        _id: "3",
                        number: 2,
                        status: 2,
                        type: 0
                    }
                ]
            },
            {

                _id: "2",
                level: 2,
                name: "Ebene 2",
                parkingLots: [
                    {
                        _id: "1",
                        number: 1,
                        status: 0,
                        type: 0
                    },
                    {
                        _id: "2",
                        number: 2,
                        status: 1,
                        type: 0
                    },
                    {
                        _id: "3",
                        number: 2,
                        status: 1,
                        type: 0
                    }
                ]
            }
        ]

        return (
            <div>
                <ParkingLotCard title="Mein Titel" levels={levels}></ParkingLotCard>
            </div>
        );
    }
}


