import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Questions } from './questions.model';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(public http:HttpClient) { }



  loadQuestion() : Observable<Questions[]>
  {
    return this.http.get<Questions[]>("/assets/questions.js");
  }

}
