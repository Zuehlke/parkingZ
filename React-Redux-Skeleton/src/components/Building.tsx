require("../../styles/building.css");

import * as React from 'react';
import * as redux from 'redux';
import { connect } from 'react-redux';

import { fetchBuilding } from "../actions/Actions";
import { Link } from "react-router";
import { mapStateToBuildingProps } from "../mappers/StateMapper";

type DispatchProps = {
    fetchBuilding: (buildingId) => { type: string };
};

type OwnProps = {
    label: string,
    routeParams: {
        buildingId: string
    }
}

type BuildingProps = Store.BuildingProps & DispatchProps & OwnProps;

const mapStateToProps = (state: Store.All, ownProps: OwnProps): Store.BuildingProps => (mapStateToBuildingProps(state));

const mapDispatchToProps = (dispatch: redux.Dispatch<Store.All>): DispatchProps => ({
    fetchBuilding: (buildingId) =>
        dispatch(fetchBuilding(buildingId))
});

class BuildingComponent extends React.Component<BuildingProps, {}> {

    componentDidMount() {
        this.props.fetchBuilding(this.props.routeParams.buildingId);
    }

    render() {
        const { building, isFetchingBuilding, label } = this.props;

        return (
            <div className="panel panel-primary">
                <div className="panel-heading">Building Overview</div>
                {building &&
                    <div className="panel-body">
                        <h3>{building.name}</h3>
                        <div className="legends">
                            <div className="legend-free">FREE</div>
                            <div className="legend-ocupied">OCUPIED</div>
                            <div className="legend-unknown">UNKNOWN</div>
                        </div>
                        {building.levels.map(level =>
                            // TODO: make Level component
                            <div key={level._id}>
                                <h4>{level.name}</h4>
                                {level.parkingLots && level.parkingLots.map(parkingLot =>
                                    <div key={parkingLot._id} className="parking-lot">
                                        <p>{parkingLot.number}: <span className={parkingLot.status.toString().toLowerCase()}>{parkingLot.type}</span></p>       
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                }
                <div className="panel-footer">
                </div>
            </div >
        );
    }
}

export const Building: React.ComponentClass<OwnProps> = connect(mapStateToProps, mapDispatchToProps)(BuildingComponent);