import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: 'info',
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: 'registro',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('../pages/sistema/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'pesquisar',
        loadChildren: () => import('../pages/sistema/pesquisar/pesquisar.module').then( m => m.PesquisarPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../pages/sistema/perfil/perfil.module').then( m => m.PerfilPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
