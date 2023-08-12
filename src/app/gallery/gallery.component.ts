import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  status:any='pending'
  suri:any=''
  todo:any=''
  list:any=[//{ name: 'Cricket Event', status: 'pending' },
  //{ name: 'Marriage Event', status: 'processing' },
  //{ name: 'Interview', status: 'completed' }//
]
  add(task:any,status:any){
    const suri={name:task,status:status}

    this.list.push(suri);
    //console.log(this.suri)
   // this.list=[{name:'surendra',status:'pending'}]
    console.log(this.list)
  }


}
