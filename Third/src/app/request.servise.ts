import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";


@Injectable({
    providedIn:'root'
})

export class RequestServise {
    url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
    url2="http://api.openweathermap.org/data/2.5/weather?q=London&appid=558389224c7b46b0434be8ef3129403b"
    constructor(public request: HttpClient) {
    }
    getDate() {
        return this.request.get(this.url2).map((response: Response) => { return response })
    }
}