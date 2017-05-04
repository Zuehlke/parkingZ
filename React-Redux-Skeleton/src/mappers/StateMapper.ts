export const mapStateToBuildingsProps = (state: Store.All): Store.BuildingsProps => {
    return {
        buildings: state.buildings,
        isFetchingBuildings: state.isFetchingBuildings    }
};

export const mapStateToBuildingProps = (state: Store.All): Store.BuildingProps => {
    return {
        building: state.building,
        isFetchingBuilding: state.isFetchingBuilding    }
};