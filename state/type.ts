export interface Medicine {
    index: number,
    name: String,
    brand: String,
    expirationDate: String,
    volume: String,
    type: String,
    qty: String,
    expired: boolean
}

export interface MedicineListState {
    medicineList: Medicine[]
}

export interface GetMedicineAction {
    type: String,
    medicine: Medicine
}

export interface AddMedicineAction {
    type: String,
    medicine: Medicine
}

export interface DelMedicineAction {
    type: String,
    index: number
}

export interface UpdateMedicineAction {
    type: String,
    index: number,
    medicine: Medicine
}

export type MedicineListAction = AddMedicineAction | DelMedicineAction | UpdateMedicineAction

export interface AppState {
    medicineList: MedicineListState
}