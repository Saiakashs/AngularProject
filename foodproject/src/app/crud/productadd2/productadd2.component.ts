import { Component } from '@angular/core';
import { NavComponent } from '../../layout/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productadd2',
  imports: [NavComponent,FormsModule],
  templateUrl: './productadd2.component.html',
  styleUrl: './productadd2.component.css'
})
export class Productadd2Component {

  constructor(public _dbObj:DbserviceService,public _router:Router){}
  
    addData(data:any){
      console.log(data);
      this._dbObj.addRecord("products2",data).subscribe(()=>{
        window.alert("Product Added Successfully");
        this._router.navigate(["/nonveg"])
      })
    }

}
