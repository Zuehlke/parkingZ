import * as React from 'react'
import { Card, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux';

class ParkingLotCardComponent extends React.Component<{}, {}> {

    render() {
        return (
            <Card>
                <Card.Content>
                    <Card.Header>Recent Activity</Card.Header>
                </Card.Content>
                <Card.Content>
                    <Grid>
                        <Grid.Column key={1}>
                            {/*<Image src='/assets/images/wireframe/image.png' />*/}
                        </Grid.Column>
                    </Grid>
                </Card.Content>
            </Card>
        )
    }
}

export const ParkingLotCard: React.ComponentClass<{}> = connect(null, {})(ParkingLotCardComponent);