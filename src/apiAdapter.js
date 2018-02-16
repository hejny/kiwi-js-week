import {observable} from "mobx/lib/mobx";







const result = {
    from: 'Prague',
    to: 'Barcelona',
    date: '2018/03/18',
    time: '18:30',
    price: '150€',
};





export function searchFlights(search){
    return new Promise((resolve, reject)=>{


        var request = new XMLHttpRequest();

        request.open('GET', `https://api.skypicker.com/flights?flyFrom=${encodeURI(search.from)}&to=${encodeURI(search.to)}&dateFrom=${encodeURI(search.date)}`);//&dateTo=

        request.onreadystatechange = function(){
            if (this.readyState === 4) {
                console.log('Status:', this.status);
                console.log('Headers:', this.getAllResponseHeaders());
                console.log('Body:', this.responseText);

                const result = JSON.parse(this.responseText);
                resolve(result.data);


            }
        };

        request.send();




    });
}



export function searchLocations(searchText){
    return new Promise((resolve, reject)=>{


        var request = new XMLHttpRequest();

        request.open('GET', `https://api.skypicker.com/locations/?term=${encodeURI(searchText)}&v=2&locale=en-US`);

        request.onreadystatechange = function(){
            if (this.readyState === 4) {
                //console.log('Status:', this.status);
                //console.log('Headers:', this.getAllResponseHeaders());
                //console.log('Body:', this.responseText);

                const result = JSON.parse(this.responseText);
                resolve(result.locations);


            }
        };

        request.send();




    });
}


