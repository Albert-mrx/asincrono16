import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeruComponent } from './peru/peru.component';
import { ChileComponent } from './chile/chile.component';
import { UruguayComponent } from './uruguay/uruguay.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    PeruComponent,
    ChileComponent,
    UruguayComponent,
    MenuComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    MenuComponent,
    PeruComponent,
    ChileComponent,
    UruguayComponent,
    HeaderComponent
  ]
})
export class LatamModule { }
