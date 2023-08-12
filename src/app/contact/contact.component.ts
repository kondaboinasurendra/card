import { Component, OnInit } from '@angular/core';
import  {FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
   submitted:boolean=false;
  userform!:FormGroup;
  userList:any=[{id:1,name:"surendra",email:"surendra@gmail.com",phone:9182912802}]
  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.userform=this.fb.group({
      id:[''],
      name:[''],
      email:[''],
      phone:['']
    })
    
  }
  get f() {return this.userform.controls;}
  save(){
    this.submitted=true;
    if(this.userform.valid){
      console.log(this.userform)
      this.userList.push(this.userform.value)
    }else{
      return;
    }

  }
  delete(index:any){
    this.userList.splice(index,1)
  }
}
