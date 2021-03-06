class City {
    constructor(cityName, population, latitude, longitude, key) {
        this.cityName = cityName;
        if (population > 0){
            this.population = population;
        }else {
            this.population = 0;
        }
        if (latitude < -90){
            this.latitude =-90
        }else if (latitude > 90){
            this.latitude = 90
        }else{
            this.latitude = latitude;
        }
        if(longitude < -180){
            this.longitude = -180
        }else if (longitude > 180){
            this.longitude = 180
        }else{
        this.longitude = longitude;
        }
        this.key = key;

    }
    show(key) {
        return `${this.cityName} ${this.population} ${this.latitude} ${this.longitude}`;
    }
    cityMovedIn( key, movedInPeople) {
        return this.population = this.population + movedInPeople;
    }

    movedOut(key, movedOutpeople) {
        return this.population = this.population - movedOutpeople;
    }
    howBig(key, population) {
        if (population > 100000) {
            return "City"
        } if (population <= 100000 && population >= 20000) {
            return "Large Town"
        } if (population <= 199999 && population >= 1000) {
            return "Town"
        } if (population <= 999 && population >= 101) {
            return "Village"
        } if (population <= 100 && population > 1) {
            return "Hamlet"
        }
    }
};

export default City;