import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessComponent } from './routes/business/business.component';
import { BusinessListComponent } from './routes/business-list/business-list.component';

const routes: Routes = [
  { path: '', component: BusinessListComponent },
  { path: 'business/:id', component: BusinessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
