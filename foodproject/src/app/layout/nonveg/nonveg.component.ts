import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nonveg',
  imports: [NavComponent,RouterLink,CommonModule],
  templateUrl: './nonveg.component.html',
  styleUrl: './nonveg.component.css'
})
export class NonvegComponent {

   productArray:any;
  
    constructor(public dbobj:DbserviceService){}  //dependency injection
  
    ngOnInit(){
      this.fetchData();
    }
  
    fetchData(){
      this.dbobj.getRecord("products2").subscribe((res:any)=>{
        console.log(res);
        this.productArray=res;
      })
    }
    
    deleteData(id:any,name:any){
      if(window.confirm(`Are you sure want to delete product with name:${name}`)==true){
        this.dbobj.deleteRecord("products2",id).subscribe((res:any)=>{
          //console.log(res);
          window.alert("Product Deleted Successfully")
          this.fetchData();
        })
      }
    }

}
