import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient: HttpClient) { }

  httpGet(url: string, options?): any {
    return this.httpClient.get(url, options);
  }
}
