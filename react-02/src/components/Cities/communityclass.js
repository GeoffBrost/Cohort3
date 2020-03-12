import City from './cityclass.js'

class Community {
    constructor() {
        this.community = [];
        this.counterID = 0;
    }
    createCity(name, population, latitude, longitude) {
        const newCity = new City(name, population, latitude, longitude
            , this.counterID);
        this.community.push(newCity);
        this.counterID++
        return this.community;
    }
    deleteCity(key) {
        this.community = this.community.filter((city) => city.key !== key);
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

export default Community;