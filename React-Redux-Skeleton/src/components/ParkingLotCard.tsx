import * as React from 'react'
import { Card, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { LevelEntry } from "./LevelEntry";

type OwnProps = {
    title: string,
    levels: Level[]
}

export class ParkingLotCard extends React.Component<OwnProps, {}> {

    render() {
        const { title, levels } = this.props;

        return (
            <Card>
                <Card.Content>
                    <Card.Header>{title}</Card.Header>
                </Card.Content>
                <Card.Content>
                    <Grid columns={2}>
                        {
                            levels.map(level =>
                                <LevelEntry level={level} key={level._id}></LevelEntry>
                            )
                        }
                    </Grid>
                </Card.Content>
            </Card>
        )
    }
}