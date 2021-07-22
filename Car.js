class Car {
    constructor(data) {
        this.data = data;
    }

    intro() {
        console.log(`This is ${this.data.brand}.`);
    }

    doorsCount() {

        console.log(`${this.data.brand} has ${this.data.doors.length} doors.`)

    }
    doorsWorking() {
        let workingDoorsCount = 0;

        for (let i = 0; i < this.data.doors.length; i++) {
            const door = this.data.doors[i]
            if (door.working === true) {
                ++workingDoorsCount;
            }
        }

        if (workingDoorsCount === this.data.doors.length) {
            console.log(`${this.data.brand} has ${this.data.doors.length} doors and all works!`)
        } else {
            console.log(`${this.data.brand} has ${this.data.doors.length} doors, but only ${workingDoorsCount} is working.`)
        }
    }

    maxDistance() {

        const maxCanTravel = (this.data.tankSize.maxSize * 100) / this.data.fuelConsumption;
        console.log(`${this.data.brand} can travel maximum ${maxCanTravel.toFixed(0)}km.`);
    }


}
module.exports = Car;