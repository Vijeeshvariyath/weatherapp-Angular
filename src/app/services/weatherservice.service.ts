import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {

  constructor(private httpclient:HttpClient) { }

  search(cityName:string){

   

  }

}
