import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChileComponent } from './latam/chile/chile.component';
import { MenuComponent } from './latam/menu/menu.component';
import { PeruComponent } from './latam/peru/peru.component';
import { UruguayComponent } from './latam/uruguay/uruguay.component';

const routes: Routes = [
  {path:'menu',component:MenuComponent},
  {path:'peru',component:PeruComponent},
  {path:'chile',component:ChileComponent},
  {path:'uruguay',component:UruguayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
