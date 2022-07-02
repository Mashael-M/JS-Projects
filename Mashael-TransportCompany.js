// JavaScript 102 project. Mashael Alshlash.

class Vehicle{
    constructor(id, name, companyName){
        this.id = id 
        this.name = name 
        this.companyName = companyName
    }
}

class Car extends Vehicle{
    constructor(id, name, companyName,carType){
        super(id, name, companyName)
        this.carType = carType 
    }
}

class Plane extends Vehicle{
    constructor(id, name, companyName,planeType){
        super(id, name, companyName)
        this.planeType= planeType
    }
}


class Employee{
    constructor(id, name, dateOfBirth){
        this.id = id 
        this.name = name 
        this.dateOfBirth = dateOfBirth
    }
}

class Driver extends Employee{
    constructor(id, name, dateOfBirth,licenseID){
        super(id, name, dateOfBirth)
        this.licenseID = licenseID
    }
}

class Pilot extends Employee{
    constructor(id, name, dateOfBirth,licenseID){
        super(id, name, dateOfBirth)
        this.licenseID = licenseID
    }
}


class Reserved{
    constructor( reservationID, reservationDate, employeeId , vehiclesId){
        this.reservationID = reservationID
        this.reservationDate = reservationDate
        this.employeeId = employeeId
        this.vehiclesId= vehiclesId
    }
}

const car1 = new Car('car1', 'Kona', 'Hyundai', 'gas')
const car2 = new Car('car2', 'Cayenne', 'Porsche', 'gas')
const car3 = new Car('car3', 'Urus', 'Lamborghini', 'electric')

const plane1 = new Plane('plane1', 'Airbus', 'Airbus Group', 'A320')
const plane2 = new Plane('plane2', 'Boeing', 'Boeing','777x')

const driver1 = new Driver('driver1', 'Sara', '04/04/1990','#443322')
const driver2 = new Driver('driver2', 'Maha', '09/17/1997','#445566')

const pilot1 = new Pilot('pilot1', 'Nour', '06/10/1992','#223344')
const pilot2 = new Pilot('pilot2', 'Dana', '01/01/2000','#221199')



const reservationArray = [];
function check(employeeId, vehicleId, reservationId){
    if (employeeId.includes('driver') && vehicleId.includes('car') || employeeId.includes('pilot') && vehicleId.includes('plane') ){
        const d = new Date();
        const dateToday= d.getDate()+ '/' + (d.getMonth()+1) + '/' + d.getFullYear()
        const ob = new Reserved(`reservation ${[reservationId]}`, dateToday, employeeId , vehicleId);
        reservationArray.push(ob);
        return `The '${vehicleId}' has been assigned to '${employeeId}'. Please wait...`;
    } else {
        return 'An error, please check the vehicle number or employee number.'
    }
}

console.log(check(driver2.id , car1.id , 1111));
console.log(check(driver1.id , plane1.id , 2222));
console.log(check(pilot1.id , plane2.id , 3333));
console.log(check(pilot2.id , car1.id , 4444));

const printReservations = reservationArray.map(function(element){
    console.log(element);;
})