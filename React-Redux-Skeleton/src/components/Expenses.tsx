require("../../styles/expenses.css");

import * as React from 'react';
import * as redux from 'redux';
import { connect } from 'react-redux';

import { fetchBuildings } from "../actions/Actions";
import { Link } from "react-router";
import { mapStateToBuildingProps } from "../mappers/StateMapper";

type DispatchProps = {
    fetchBuildings: () => { type: string };
};

type OwnProps = {
    label: string
}

type ExpensesProps = Store.BuildingProps & DispatchProps & OwnProps;

const mapStateToProps = (state: Store.All, ownProps: OwnProps): Store.BuildingProps => (mapStateToBuildingProps(state));

const mapDispatchToProps = (dispatch: redux.Dispatch<Store.All>): DispatchProps => ({
    fetchBuildings: () =>
        dispatch(fetchBuildings())
});

class ExpensesComponent extends React.Component<ExpensesProps, {}> {

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
                                <th>From</th>
                                <th>Levels</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {buildings.map(building =>
                                <tr key={building._id}>
                                    <td><Link to={`/expenses/${building._id}`}>{building.name}</Link></td>
                                    <td>{building.levels.length}</td>
                                </tr>
                            )}
                        </tbody>
                    </table >
                }
                <div className="panel-footer">
                    <Link className="btn btn-primary" to="/expenses/add">
                        <span className="glyphicon glyphicon-plus"></span> Add new expense
                    </Link>
                </div>
            </div >
        );
    }
}

export const Expenses: React.ComponentClass<OwnProps> = connect(mapStateToProps, mapDispatchToProps)(ExpensesComponent);