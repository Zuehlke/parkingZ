export const mapStateToBuildingProps = (state: Store.All): Store.BuildingProps => {
    return {
        buildings: state.buildings,
        isFetchingBuildings: state.isFetchingBuildings    }
};