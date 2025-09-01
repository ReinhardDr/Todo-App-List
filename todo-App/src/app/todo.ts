// import { HttpClient } from '@angular/common/http';
// import { inject, Injectable } from '@angular/core';
// import { environment } from '../environments/environment.development';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class todoservices {
//   private http = inject(HttpClient);
//   private apiUrl = environment.apiUrl + '/api/todo';

//   public get(): Observable<any> {
//     return this.http.get(this.apiUrl);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodoServices {
  private apiUrl = 'http://localhost:5001/api/todo';

  constructor(private http: HttpClient) { }

  get(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  add(todo: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, todo);
  }

  update(todo: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${todo.id}`, todo);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
