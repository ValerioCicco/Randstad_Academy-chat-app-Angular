import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full'},
  { path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule) },
  {path: 'chat', loadChildren: () => import('./pages/chat/chat.module').then(m => m.ChatModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
