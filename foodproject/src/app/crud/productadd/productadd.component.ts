import { Component } from '@angular/core';
import { NavComponent } from '../../layout/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productadd',
  imports: [NavComponent,FormsModule],
  templateUrl: './productadd.component.html',
  styleUrl: './productadd.component.css'
})
export class ProductaddComponent {

  constructor(public _dbObj:DbserviceService,public _router:Router){}

  addData(data:any){
    console.log(data);
    this._dbObj.addRecord("products",data).subscribe(()=>{
      window.alert("Product Added Successfully");
      this._router.navigate(["/veg"])
    })
  }
}
