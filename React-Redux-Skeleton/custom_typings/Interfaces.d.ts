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

interface BuildingForm {
    name: string;
}

interface BuildingFormTouched {
    name: boolean;
}

declare namespace Store {

    export type BuildingsProps = {
        buildings: Building[],
        isFetchingBuildings: boolean
    }

    export type BuildingProps = {
        building: Building,
        isFetchingBuilding: boolean
    }

    export type BuildingFormProps = {
        buildingFormTouched: BuildingFormTouched
    }

    export type All = BuildingProps & BuildingsProps & BuildingFormProps;
}