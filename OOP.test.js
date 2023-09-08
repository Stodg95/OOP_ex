describe('Vehicle Class', () => {
    it('should create a Vehicle object', () => {
        const vehicle = new Vehicle('Toyota', 'Supra', 1997);
        expect(vehicle.make).toBe('Toyota');
        expect(vehicle.model).toBe('Supra');
        expect(vehicle.year).toBe(1997);
    });

    it('should honk', () => {
        const vehicle = new Vehicle('Toyota', 'Supra', 1997);
        expect(vehicle.honk()).toBe('Beep!');
    });

    it('should return a string representation', () => {
        const vehicle = new Vehicle('Toyota', 'Supra', 1997);
        expect(vehicle.toString()).toBe('The vehicle is a Toyota Supra from 1997.');
    });
});

describe('Car Class', () => {
    it('should create a Car object', () => {
        const car = new Car('Nissan', 'R34 GTR', 2002);
        expect(car.make).toBe('Nissan');
        expect(car.model).toBe('R34 GTR');
        expect(car.year).toBe(2002);
        expect(car.numWheels).toBe(4);
    });
});

describe('Motorcycle Class', () => {
    it('should create a Motorcycle object', () => {
        const motorcycle = new Motorcycle('Yamaha', 'R1', 2020);
        expect(motorcycle.make).toBe('Yamaha');
        expect(motorcycle.model).toBe('R1');
        expect(motorcycle.year).toBe(2020);
        expect(motorcycle.numWheels).toBe(2);
    });

    it('should rev the engine', () => {
        const motorcycle = new Motorcycle('Yamaha', 'R1', 2020);
        expect(motorcycle.revEngine()).toBe('VROOOOM!!!');
    });
});

describe('Garage Class', () => {
    it('should create a Garage object with a capacity', () => {
        const garage = new Garage(3);
        expect(garage.capacity).toBe(3);
        expect(garage.vehicles).toEqual([]);
    });

    it('should add vehicles to the garage', () => {
        const garage = new Garage(2);
        const car = new Car('Mazda', 'RX7', 1995);
        const motorcycle = new Motorcycle('BMW', 'S1000RR', 2022);

        expect(garage.add(car)).toBe('Vehicle added!');
        expect(garage.add(motorcycle)).toBe('Vehicle added!');
        expect(garage.vehicles).toContain(car);
        expect(garage.vehicles).toContain(motorcycle);
    });

    it('should not add non-vehicle objects to the garage', () => {
        const garage = new Garage(2);
        const nonVehicle = { name: 'Not a vehicle' };
        expect(garage.add(nonVehicle)).toBe('Only vehicles are allowed in here!');
        expect(garage.vehicles).not.toContain(nonVehicle);
    });

    it('should not add vehicles when the garage is full', () => {
        const garage = new Garage(1);
        const car1 = new Car('Toyota', 'Chaser', 2001);
        const car2 = new Car('Honda', 'NSX', 1998);

        expect(garage.add(car1)).toBe('Vehicle added!');
        expect(garage.add(car2)).toBe("Sorry, we're full.");
        expect(garage.vehicles).toContain(car1);
        expect(garage.vehicles).not.toContain(car2);
    });
});