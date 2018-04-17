import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import { HeroesComponent } from './../heroes/heroes.component';
import {MainComponent} from './main.component';

const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'hero', component:  },
      { path: 'dashboard', loadChildren: 'app/page/notice/notice.module#NoticeModule' },
      { path: '**', redirectTo: 'hero' },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule {}
