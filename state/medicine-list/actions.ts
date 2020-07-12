import { AddMedicineAction, DelMedicineAction, UpdateMedicineAction, Medicine } from "../type";

export enum MEDICINE_LIST_ACTION_TYPES {
    ADD_MEDICINE = 'ADD_MED',
    DEL_MEDICINE = 'DEL_MED',
    UPDATE_MEDICINE = 'UPDATE_MED',
    FILTER_MEDICINE = 'FILTER_MED',
    SORT_MEDICINE = 'SORT_MED'
}

export function addMedicine(medicine: Medicine): AddMedicineAction {
    return {
        type: MEDICINE_LIST_ACTION_TYPES.ADD_MEDICINE,
        medicine: medicine
    }
}

export function delMedicine(index: number): DelMedicineAction {
    return {
        type: MEDICINE_LIST_ACTION_TYPES.DEL_MEDICINE,
        index: index
    }
}

export function updateMedicine(index: number, medicine: Medicine): UpdateMedicineAction {
    return {
        type: MEDICINE_LIST_ACTION_TYPES.UPDATE_MEDICINE,
        index: index,
        medicine: medicine
    }
}
