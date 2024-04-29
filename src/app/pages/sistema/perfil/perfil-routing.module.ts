import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { PerfilPage } from './perfil.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes) // Remova o segundo imports e use RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  //declarations: [PerfilPage],
  bootstrap: [PerfilPage] // Adicione o componente ao array de bootstrap
})
export class PerfilPageRoutingModule {}
