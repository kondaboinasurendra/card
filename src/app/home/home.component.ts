import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { environments } from 'src/environments/environment';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any=environments.apiUrl+'products'
  
  constructor(private http:HttpClient,private share:SharedService){

  }
  ngOnInit(): void {
    this.http.get(this.products).subscribe(Response=>{
      this.products=Response;
      console.log(this.products)
    })
    }
    add(data:any){
      this.share.share(data);
    }
    
  }


