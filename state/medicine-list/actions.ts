import { AddMedicineAction, DelMedicineAction, UpdateMedicineAction, Medicine } from "../type";

export enum MEDICINE_LIST_ACTION_TYPES {
    ADD_MEDICINE = 'ADD_MED',
    DEL_MEDICINE = 'DEL_MED',
    UPDATE_MEDICINE = 'UPDATE_MED',
    FILTER_MEDICINE = 'FILTER_MED',
    SORT_MEDICINE = 'SORT_MED'
}

export const addMedicine = (medicine: Medicine): AddMedicineAction => (
    {
        type: MEDICINE_LIST_ACTION_TYPES.ADD_MEDICINE,
        medicine: medicine
    }
)

export const delMedicine = (index: number): DelMedicineAction => (
    {
        type: MEDICINE_LIST_ACTION_TYPES.DEL_MEDICINE,
        index: index
    }
)

export const updateMedicine = (index: number, medicine: Medicine): UpdateMedicineAction => (
    {
        type: MEDICINE_LIST_ACTION_TYPES.UPDATE_MEDICINE,
        index: index,
        medicine: medicine
    }
)
