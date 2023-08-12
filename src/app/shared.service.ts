import { Injectable } from '@angular/core';
import{BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  data=new BehaviorSubject(null);
  getData=this.data.asObservable();
  share(data:any){
    this.data.next(data)
  }
}
