import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { favoritos } from './components/posts/favoritos';
import { PostsComponent } from './components/posts/posts.component';
const routes: Routes = [
  { path: '', redirectTo: '/postcomponent', pathMatch: 'full' },
  { path: 'postcomponent', component:  PostsComponent },
  { path: 'favoritos', component: favoritos  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
