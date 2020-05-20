
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProvidersSearchComponent } from './search.component';

const routes: Routes = [
  {
    path: '',
    component: ProvidersSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvidersRoutingModule { }
