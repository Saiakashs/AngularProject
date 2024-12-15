import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { CommonModule } from '@angular/common';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-veg',
  imports: [NavComponent,CommonModule,RouterLink],
  templateUrl: './veg.component.html',
  styleUrl: './veg.component.css'
})
export class VegComponent {

  productArray:any;

  constructor(public dbobj:DbserviceService){}  //dependency injection

  ngOnInit(){
    this.fetchData();
  }

  fetchData(){
    this.dbobj.getRecord("products").subscribe((res:any)=>{
      console.log(res);
      this.productArray=res;
    })
  }
  
  deleteData(id:any,name:any){
    if(window.confirm(`Are you sure want to delete product with name:${name}`)==true){
      this.dbobj.deleteRecord("products",id).subscribe((res:any)=>{
        //console.log(res);
        window.alert("Product Deleted Successfully")
        this.fetchData();
      })
    }
    
  }
}
