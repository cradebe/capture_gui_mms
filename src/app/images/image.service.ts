import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Image } from './image';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  baseUrl: string = "http://127.0.0.1:5000/"
  
  constructor(private httpClient: HttpClient) { }
  
  public getImages(): Observable<Image[]>{
    return this.httpClient.get(this.baseUrl).pipe(map((data: any) => data))
  }
  public getImage(id: number){}

  public uploadImages(data: any):Observable<Image> {
    let t = this.httpClient.post(this.baseUrl + 'upload', data).pipe(map((data: any) => data.status))
    console.log(t.subscribe(data => data))
    return this.httpClient.post(this.baseUrl + 'upload', data).pipe(map((data: any) => data))
  }
}
