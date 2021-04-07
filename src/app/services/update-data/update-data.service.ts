import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { User } from 'src/app/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UpdateDataService {

  constructor( private http: HttpClient ) { }

  update(userId, formData):Observable<User> {
    console.log('send');
    return this.http.patch<User>(`${environment.BASE_API}/users/${userId}`, formData);
  }
}
