export type Medicine = {
    index: number,
    name: String,
    brand: String,
    expirationDate: String,
    volume: String,
    type: String,
    qty: String,
    expired: boolean
}

export type MedicineListState = Medicine[]

export type AddMedicineAction = {
    type: String,
    medicine: Medicine
}

export type DelMedicineAction = {
    type: String,
    index: number
}

export type UpdateMedicineAction = {
    type: String,
    index: number,
    medicine: Medicine
}

export type MedicineListAction = AddMedicineAction | DelMedicineAction | UpdateMedicineAction

export type AppState = {
    medicineList: MedicineListState
}