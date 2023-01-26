export type CarEntity = {
    id: number,
    model: string,
    licensePlate: string,
    year: number,
    color: string,
    createdAt: Date

}

export type Car =  Omit<CarEntity, "id">

export type NewCar = Partial<CarEntity>