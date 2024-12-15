import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { ReactiveFormsModule,FormGroup,FormControl,Validators, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [NavComponent,ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  empForm:any;

  ngOnInit(){
    this.empForm=new FormGroup({
      
      fname:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]{3,20}$')]),
      lname:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]{1,10}$')]),
      password:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9@]{8,12}$')]),
      term:new FormControl('',[Validators.requiredTrue]),

    })
  }

  getData(){
    window.alert(`${this.empForm.value.fname},${this.empForm.value.lname},${this.empForm.value.password},${this.empForm.value.term}`);
  }

}
