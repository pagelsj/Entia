import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from 'rxjs';

import { environment } from '../../../environments/environment';

import { User } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(
    private http: HttpClient
  ) { }

  load():Observable<User[]>{
    return this.http.get<User[]>(environment.BASE_API+`/users`);
  }
}
