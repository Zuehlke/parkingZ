export const mapStateToExpenseProps = (state: Store.All): Store.ExpenseProps => {
    return {
        expenses: state.expenses,
        isFetchingExpenses: state.isFetchingExpenses
    }
};