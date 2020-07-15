import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Covid } from '../model/covid';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  url = 'https://coronavirus-19-api.herokuapp.com/countries/brazil';

  covid: Covid;

  constructor(private http: HttpClient) { }



  getInfo(): Observable<Covid>{
    return this.http.get<Covid>(this.url)
  }
}


