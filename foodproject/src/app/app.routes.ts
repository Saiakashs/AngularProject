import { Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { AboutComponent } from './layout/about/about.component';
import { ProductsComponent } from './layout/products/products.component';
import { ContactComponent } from './layout/contact/contact.component';
import { NavComponent } from './layout/nav/nav.component';
import { VegComponent } from './layout/veg/veg.component';
import { NonvegComponent } from './layout/nonveg/nonveg.component';
import { ProductaddComponent } from './crud/productadd/productadd.component';
import { ProducteditComponent } from './crud/productedit/productedit.component';
import { Productadd2Component } from './crud/productadd2/productadd2.component';
import { Productedit2Component } from './crud/productedit2/productedit2.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"products",component:ProductsComponent},
    {path:"veg",component:VegComponent},
    {path:"nonveg",component:NonvegComponent},
    {path:"contact",component:ContactComponent},
    {path:"nav",component:NavComponent},
    {path:"productadd",component:ProductaddComponent},
    {path:"productedit/:id",component:ProducteditComponent},
    {path:"productadd2",component:Productadd2Component},
    {path:"productedit2/:id",component:Productedit2Component},
];

