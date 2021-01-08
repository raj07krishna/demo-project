import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsumeApiService {

  constructor(private http: HttpClient) {}

  loadData(): Observable<any> {
    return this.http
      .get("https://reqres.in/api/users?page=2").pipe(map(this.extractData))
  }
   extractData(res: Response) {
    let body = res;
    return body;
  }
}
