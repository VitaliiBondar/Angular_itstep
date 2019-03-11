import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import "rxjs/add/operator/map";


@Injectable({
    providedIn:'root'
})

export class RequestServise {
    url = "https://weather2-72535.firebaseio.com/blog.json";
    url2="http://api.openweathermap.org/data/2.5/weather?q=London&appid=558389224c7b46b0434be8ef3129403b"
    
    constructor(private HTTP: HttpClient) {
    }
    saveDate(Data:any[]) {
        const headers = new HttpHeaders({'Content-Type' : 'application/json'});
        return this.HTTP.post(this.url,Data,{headers:headers})
    }
    getData(){
        console.log('ok');
        return this.HTTP.get(this.url).map((response:Response)=> {return response});
    }
}