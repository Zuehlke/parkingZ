require("../../styles/expenses.css");

import * as React from 'react';
import * as redux from 'redux';
import { connect } from 'react-redux';

import { fetchExpenses } from "../actions/Actions";
import { Link } from "react-router";
import { mapStateToExpenseProps } from "../mappers/StateMapper";

type DispatchProps = {
    fetchExpenses: () => { type: string };
};

type OwnProps = {
    label: string
}

type ExpensesProps = Store.ExpenseProps & DispatchProps & OwnProps;

const mapStateToProps = (state: Store.All, ownProps: OwnProps): Store.ExpenseProps => (mapStateToExpenseProps(state));

const mapDispatchToProps = (dispatch: redux.Dispatch<Store.All>): DispatchProps => ({
    fetchExpenses: () =>
        dispatch(fetchExpenses())
});

class ExpensesComponent extends React.Component<ExpensesProps, {}> {

    componentDidMount() {
        this.props.fetchExpenses();
    }

    render() {
        const { expenses, isFetchingExpenses, label } = this.props;

        return (
            <div className="panel panel-primary">
                <div className="panel-heading">Expenses Overview</div>
                {expenses && expenses.length &&
                    <table className="table">
                        <thead>
                            <tr>
                                <th>From</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>For what</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {expenses.map(expense =>
                                <tr key={expense.id}>
                                    <td><Link to={`/expenses/${expense.id}`}>{expense.name}</Link></td>
                                    <td>{expense.date}</td>
                                    <td>{expense.amount}</td>
                                    <td>{expense.reason}</td>
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