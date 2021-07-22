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

        const maxKmCanGo = (this.data.tankSize.maxSize * 100) / this.data.fuelConsumption;
        console.log(`${this.data.brand} can travel maximum ${maxKmCanGo.toFixed(0)}km.`);
    }

    canTravel(distanceKm) {
        const tankSize = this.data.tankSize;
        const petrolLeftInKm = (tankSize.currentSize * 100) / this.data.fuelConsumption;

        if (petrolLeftInKm >= distanceKm) {
            console.log(`${this.data.brand} can travel ${distanceKm} km.`)
        } else {
            console.log(`${this.data.brand} can't travel ${distanceKm} km, it has fuel only for ${petrolLeftInKm.toFixed(0)} km.`)
        }
        this.petrolLeftInKm = petrolLeftInKm.toFixed(0);
    }

    continueTravel(distanceKm) {

        if (this.petrolLeftInKm >= distanceKm) {
            console.log(`${this.data.brand} can travel ${distanceKm} km, no extra fuel is needed.`)
        }


        else {
            const distanceLeftToGo = (distanceKm - this.petrolLeftInKm);
            const extraPetrolNeed = (distanceLeftToGo * this.data.fuelConsumption) / 100;
            const moneyForExtraPetrol = extraPetrolNeed * this.data.fuelCostPerLitre;
            console.log(`${this.data.brand} can't travel ${distanceKm} km, you need ${moneyForExtraPetrol.toFixed(2)} Euros for extra fuel.`)
        }

        // console.log(`${this.data.brand} can travel 50 km, no extra fuel is needed.`)
    }

}
module.exports = Car;