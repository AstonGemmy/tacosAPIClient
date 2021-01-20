import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TacosComponent } from './tacos/tacos.component';

const routes: Routes = [
  {path:'tacos', component: TacosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
