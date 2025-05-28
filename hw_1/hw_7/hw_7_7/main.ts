class NewCarAdd {
    model: string;
    manufacturer: string;
    year: number;
    maxSpeed: number;
    motor: number;
    driver?: { name: string, age: number };

    constructor(model: string, manufacturer: string, year: number, maxSpeed: number, motor: number) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.motor = motor;

    }

    drive(): void {
        console.log(`we drive at a ${this.maxSpeed} per hour`);
    }

    info(): void {
        for (let key in this) {
            console.log(`${key}: ${this[key]}`);
        }
    }

    increaseMaxSpeed(newSpeed: number): void {
        if (newSpeed > 0) this.maxSpeed += newSpeed;
    }

    changeYear(newValue: number): void {
        if (newValue > 1900) {
            this.year = newValue;
        } else console.log("invalid value");
    }

    addDriver(driver:{ name: string, age: number }): void {
        if (driver) this.driver = driver;
    }
}
const newCar = new NewCarAdd("Jaguar", "UK", 2022, 320, 3.2);
