import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getTacos(){
    return this.httpClient.get(`http://taco-randomizer.herokuapp.com/random/`);
  }
}
