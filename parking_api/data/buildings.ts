const ParkingLotsM1 = [
    { _id: '178kj65f4', number: 1, status: 1, type: 0 },
    { _id: '178k385f4', number: 2, status: 1, type: 0 },
    { _id: '16tj65f44', number: 3, status: 1, type: 1 },
    { _id: '16jj6ju80', number: 4, status: 2, type: 2 },
    { _id: '17gj6ju90', number: 5, status: 0, type: 3 },
];

const ParkingLots0 = [
    { _id: '078kj65f4', number: 1, status: 1, type: 0 },
    { _id: '078k385f4', number: 2, status: 1, type: 0 },
    { _id: '06tj65f44', number: 3, status: 1, type: 2 },
    { _id: '06jj6ju80', number: 4, status: 2, type: 2 },
    { _id: '07gj6ju90', number: 5, status: 0, type: 2 },
];

const Levels = [
    {
        _id: 'eschblvl-1', 
        level: '-1', 
        name: 'Level -1', 
        parkingLots: ParkingLotsM1
    },
    {
        _id: 'eschblvl0', 
        level: '0', 
        name: 'Level 0', 
        parkingLots: ParkingLots0
    },
];

const Buildings = [
    {
        _id: 'ezds38tie', 
        name: 'Zühlke Eschborn Tiefgarage', 
        levels: Levels
    },
];

export default Buildings;
