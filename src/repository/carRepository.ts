import db from "../config/database.js";
import prisma from "../config/database.js";

async function getCars() {
  return prisma.cars.findMany();

}

async function getCar(id: number) {
  return prisma.cars.findFirst({
    where: {
      id:id,
    }
  })
}

async function getCarWithLicensePlate(licensePlate: string) {
  return prisma.cars.findFirst({
    where: {
      licensePlate:licensePlate,
    }
  })
}

async function createCar(model: string, licensePlate: string, year: number, color: string) {
  return prisma.cars.create({
    data: {
      model,
      color,
      licensePlate,
      year
    }
  })
}

async function deleteCar(id: number) {
  return prisma.cars.delete({
    where: {
      id: id
    }
  })
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar
}

export default carRepository;