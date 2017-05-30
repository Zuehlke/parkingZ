import * as React from 'react'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux';

type OwnProps = {
    level: Level
}

export class LevelEntry extends React.Component<OwnProps, {}> {

    render() {
        const { level } = this.props;

        const availableParkingLotsCount = level.parkingLots.filter(parkingLot => {
            // 2 == free parking lot
            return parkingLot.status == 2;
        }).length;

        return (
            <Grid.Row key={level._id}>
                <Grid.Column>{level.name}</Grid.Column>
                <Grid.Column>{availableParkingLotsCount}</Grid.Column>
            </Grid.Row>
        )
    }
}