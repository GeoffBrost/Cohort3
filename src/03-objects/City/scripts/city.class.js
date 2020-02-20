class City {
    constructor(cityName, population, latitude, longitude) {
        this.cityName = cityName;
        this.population = population;
        this.latitude = latitude;
        this.longitude = longitude;
        this.key = key;

    }
    show(key) {
        return `${this.cityName} ${this.population} ${this.latitude} ${this.longitude}`;
    }
    movedIn(key, movedInPeople) {
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

class Community {
    constructor() {
        this.community = [];
        this.counterID = 0;
    }
    createCity(cityName, population, latitude, longitude) {
        const newCity = new City(cityName, population, latitude, longitude
            , this.counterID);
        this.community.push(newCity);
        this.counterID++
        return this.community;
    }
    deleteCity(key) {
        this.community = this.community.filter((city) => city.key != key);
    }
    selectCity(key) {
        let sel = this.community.filter(item => item.key === key);
        return sel[0];        
    }
    getMostNorthern(){
        this.community.sort((a, b) => {
        return b.longitude - a.longitude;
    });
    return this.community[0].cityName;
}
    getMostSouthern(){
        this.community.sort((a,b)=>{
            return a.longitude - b.longitude;
        });
        return this.community[0].cityName;
    }
    getCommunityPopulation(){
       return this.community.reduce((acc, city)=>
       city.population + acc, 0);
    }
    
};

export { City, Community }; 