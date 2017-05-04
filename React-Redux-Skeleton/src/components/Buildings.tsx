require("../../styles/buildings.css");

import * as React from 'react';
import * as redux from 'redux';
import { connect } from 'react-redux';

import { fetchBuildings } from "../actions/Actions";
import { Link } from "react-router";
import { mapStateToBuildingsProps } from "../mappers/StateMapper";

type DispatchProps = {
    fetchBuildings: () => { type: string };
};

type OwnProps = {
    label: string
}

type BuildingsProps = Store.BuildingsProps & DispatchProps & OwnProps;

const mapStateToProps = (state: Store.All, ownProps: OwnProps): Store.BuildingsProps => (mapStateToBuildingsProps(state));

const mapDispatchToProps = (dispatch: redux.Dispatch<Store.All>): DispatchProps => ({
    fetchBuildings: () =>
        dispatch(fetchBuildings())
});

class BuildingsComponent extends React.Component<BuildingsProps, {}> {

    componentDidMount() {
        this.props.fetchBuildings();
    }

    render() {
        const { buildings, isFetchingBuildings, label } = this.props;

        return (
            <div className="panel panel-primary">
                <div className="panel-heading">Buildings Overview</div>
                {buildings && buildings.length &&
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Garage</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {buildings.map(building =>
                                <tr key={building._id}>
                                    <td><Link to={`/building/${building._id}`}>{building.name}</Link></td>
                                </tr>
                            )}
                        </tbody>
                    </table >
                }
                <div className="panel-footer">
                    <Link className="btn btn-primary" to="/buildings/add">
                        <span className="glyphicon glyphicon-plus"></span> Add new building
                    </Link>
                </div>
            </div >
        );
    }
}

export const Buildings: React.ComponentClass<OwnProps> = connect(mapStateToProps, mapDispatchToProps)(BuildingsComponent);