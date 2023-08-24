class Tyre {
    constructor(brand, size) {
        this.brand = brand;
        this.size = size;
    }
}

class Car {
    constructor(brand, size, varian, door, seat, warranty, year, sn) {
        this.tyre = new Tyre(brand, size);
        this.varian = varian;
        this.door = door;
        this.seat = seat;
        this.warranty = warranty;
        this.year = year;
        this.sn = sn;
    }
}

class Agya {
    constructor(brand, size, varian, door, seat, warranty, year, sn) {
        this.car = new Car(brand, size, varian, door, seat, warranty, year, sn);
    }
}

class Rush {
    constructor(brand, size, varian, door, seat, warranty, year, sn) {
        this.car = new Car(brand, size, varian, door, seat, warranty, year, sn);
    }
}

class CarFactory {
    constructor() {
        this.cars = [];
    }

    produceAgya(year) {
        for (let i = 0; i < Math.floor(Math.random() * 6); i++) {
            this.cars.push(new Agya('Dunlop', 15, 'Agya', 5, 5, 1, year, CarFactory.serialNumber()));
        }
    }

    produceRush(year) {
        for (let i = 0; i < Math.floor(Math.random() * 6); i++) {
            this.cars.push(new Rush('Bridgestone', 17, 'Rush', 5, 5, 3, year, CarFactory.serialNumber()));
        }
    }

    produce(year) {
        this.produceAgya(year);
        this.produceRush(year);
        return this.cars;
    }

    result() {
        console.log("Hasil produksi :");
        let count = 1;
        for (let car of this.cars) {
            this.printCarDetails(car, count);
            count++;
        }
    }

    guaranteeSimulation(simulationYear) {
        console.log("Hasil simulasi garansi semua mobil pada tahun 2025 :");
        let count = 1;
        for (let car of this.cars) {
            this.printCarDetails(car, count);
            if (car.car.year + car.car.warranty >= simulationYear) {
                console.log(`Status on ${simulationYear} this guarantee status active`);
            } else {
                console.log(`Status on ${simulationYear} this guarantee status expired`);
            }
            count++;
        }
    }

    static serialNumber() {
        const chars = "1234567890abcdefghijklmnopqrstuvwxyz";
        let serialNum = "", indexRandom, charRandom;
        for (let i = 0; i < 36; i++) {
            indexRandom = Math.floor(Math.random() * chars.length);
            charRandom = chars.slice(indexRandom, indexRandom + 1);
            if (i === 8 || i === 13 || i === 18 || i === 23) {
                indexRandom = -1;
                charRandom = "-";
            }
            serialNum += charRandom;
        }
        return serialNum;
    }

    printCarDetails(car, count) {
        console.log(
            `
no. ${count}
varian      : ${car.car.varian}
sn          : ${car.car.sn}
door        : ${car.car.door}
seat        : ${car.car.seat} seater
tyre        : ${car.car.tyre.brand} ${car.car.tyre.size} inch
year        : ${car.car.year}
warranty    : ${car.car.warranty} year
`
        );
    }
}

const toyota = new CarFactory();
toyota.produce(2020);
toyota.produce(2022);
toyota.result();
toyota.guaranteeSimulation(2025);
