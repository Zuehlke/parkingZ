import * as React from 'react';
import { NavMenu } from "./NavMenu";
import { ParkingLotCard } from "./ParkingLotCard";

export class App extends React.Component<undefined, void> {


    render() {

        const pageTitle = 'Welcome to the Parking Lot Management Tool';

        return (
            <div>
                <ParkingLotCard></ParkingLotCard>
            </div>
        );
    }
}


