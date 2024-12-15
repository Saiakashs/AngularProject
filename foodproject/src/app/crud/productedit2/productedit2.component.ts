import { Component } from '@angular/core';
import { NavComponent } from '../../layout/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productedit2',
  imports: [NavComponent,FormsModule],
  templateUrl: './productedit2.component.html',
  styleUrl: './productedit2.component.css'
})
export class Productedit2Component {
id:any;
  productData:any;

  constructor(public _actRoute:ActivatedRoute, public _dbObj:DbserviceService, private _router:Router){}



  ngOnInit(){
    this._actRoute.params.subscribe((param:any)=>{
      this.id=param.id;
      
      this._dbObj.getSingleRecord("products2",this.id).subscribe((res:any)=>{
        //console.log(res);

        this.productData={...res};
      })
    })
  }

  editData(value:any){
    this._dbObj.editrecord("products2",this.id,value).subscribe(()=>{
      window.alert("Product Updated Successfully");
      this._router.navigate(["/nonveg"])
    })
  }
}
