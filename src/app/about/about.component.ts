import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  id:any;
  name:any;
  email:any;
  phone:any;
  usersList:any=[]
  
  constructor(private http:HttpClient,private share:SharedService){

  }
  
  add(){
    console.log(this.id,this.name)
    const userObj={id:this.id,name:this.name,email:this.email,phone:this.phone}
    this.usersList.push(userObj);
  }
  ngOnInit(): void {
    
    this.usersList=[{id:1,name:'surendra',email:'kondaboinasurendra@gmail.com',phone:9182912803},
                  {id:2,name:'surendra babu',email:'surendrakondaboina@gmail.com',phone:9398534578}]
  }
  reset(){
    this.id='',this.name='',this.email='',this.phone='';

  }
  delete(index:any){
    this.usersList.splice(index,1)
  }

}
