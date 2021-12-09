import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  url='https://api.openweathermap.org/data/2.5/weather?&appid=';
  key="be665555ac9a1636a085b7a69869a89c";

  constructor(private http: HttpClient) { }

  getClima(cuidad: string){
    const URL = this.url + this.key + '&q=' + ciudad;
    this.http.get(URL);
  }
}
