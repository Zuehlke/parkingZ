interface Expense {
    id: string;
    name: string;
    reason: ExpenseReason;
    date: Date;
    amount: number;
    text: string;
}

interface Building {
    _id: string;
    name: string;
    levels: Level[];
}

interface Level {
    _id: string;
    name: string;
    level: number;
    parkingLots: ParkingLot[];
}

interface ParkingLot {
    _id: string;
    number: number;
    status: number;
    type: number;
}

declare type ExpenseReason =
    "Flight" |
    "Train" |
    "Bus" |
    "Taxi" |
    "Hotel" |
    "Restaurant" |
    "Other";

declare type FormInputValueType = string | number | Date;

interface ExpenseForm {
    name: string;
    date: Date;
    text: string;
    amount: number;
    reasons: string[];
    reason: string;
}

interface ExpenseFormTouched {
    name: boolean;
    date: boolean;
    text: boolean;
    amount: boolean;
    reason: boolean;
}

declare namespace Store {

    export type ExpenseProps = {
        expenses: Expense[],
        isFetchingExpenses: boolean
    }

    export type ExpenseFormProps = {
        expenseFormTouched: ExpenseFormTouched
    }

    export type All = ExpenseProps & ExpenseFormProps;
}