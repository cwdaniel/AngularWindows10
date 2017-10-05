import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class BingBackgroundService {
   private url = 'http://noapi.dorparasti.ir/api/scraps/e9baeceb-f353-4703-a84d-c9e3107bd90f';

   constructor(private http: Http) { }
   getBackground = () => {
      return this.http.get(this.url).map((response: Response) => {
         const data = response.json();
         return data;
      });
   }
}
