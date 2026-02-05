import { Routes } from '@angular/router';
import { ApiDemoComponent } from './@components/api-demo/api-demo.component';
import { ApiDemo2Component } from './@components/api-demo2/api-demo2.component';

export const routes: Routes = [
  {path:'apiDemo',component:ApiDemoComponent},
  {path:'apiDemo2',component:ApiDemo2Component}

];
