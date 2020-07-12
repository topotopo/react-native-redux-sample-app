import { MedicineListState, MedicineListAction, AddMedicineAction, DelMedicineAction, UpdateMedicineAction } from "../type";
import { MEDICINE_LIST_ACTION_TYPES } from "./actions";

export const initialState = {
    medicineList: []
}

export const medicineList = (
    state: MedicineListState = initialState,
    action: MedicineListAction
) => {
    const newState: MedicineListState = Object.assign({}, state)

    switch (action.type) {
        case MEDICINE_LIST_ACTION_TYPES.ADD_MEDICINE:
            return [...newState.medicineList, (<AddMedicineAction>action).medicine]
        case MEDICINE_LIST_ACTION_TYPES.DEL_MEDICINE:
            delete newState.medicineList[(<DelMedicineAction>action).index]
            return newState
        case MEDICINE_LIST_ACTION_TYPES.UPDATE_MEDICINE:
            newState.medicineList[(<UpdateMedicineAction>action).index] = (<UpdateMedicineAction>action).medicine
            return newState
        default:
            return state
    }
}
