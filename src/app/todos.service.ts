import { HttpModule, Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TodosService {

  constructor(private http: Http) { }

}
