class StarService {

    constructor(){
        this._apiUrl = 'https://swapi.co/api';
    }



    async makeRequest(url) {
        let res = await fetch(`${this._apiUrl}${url}`);
        let body = await res.json();
        return body;
    }

    getPerson(id){
        return this.makeRequest(`/people/${id}`);
    }
    async getAllPeople(){
        let res = await this.makeRequest('/people/');
        return res.results;
    }
}

const _starService = new StarService();

_starService.getAllPeople().then((people) =>{
    people.forEach(person => {
        console.log(person.name);
    });
});
_starService.getPerson(1).then((body) =>{

    console.log(body);
});