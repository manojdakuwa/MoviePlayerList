import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PlaylistApiService {

  constructor(public http: HttpClient) { }

  public PlayList():Observable<any> {
    // const headers = new HttpHeaders()
    // .set('Accept', 'application/json')
    // .set('Authorization', 'my-auth-token')
    // .set('Content-Type', 'application/json')
    // .set('Source','Web');
    return this.http.get('https://valuefy-assignment-x.herokuapp.com/api/getVideos')
      // .subscribe(
      //   data => console.log(data),
      //   err => console.log(err)
      // );
  }
}
