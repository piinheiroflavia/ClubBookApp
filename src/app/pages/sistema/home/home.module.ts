import { NgModule} from '@angular/core';
import { CommonModule,  } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
//importei para reconhecer o ion slide  
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    HomePageRoutingModule,
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [HomePage],
 
})
export class HomePageModule {}
