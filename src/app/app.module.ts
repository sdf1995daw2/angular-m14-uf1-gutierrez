import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTableModule} from '@angular/material/table';
import { MatAnimatedIconComponent } from './mat-animated-icon';
import { PostsComponent } from './components/posts/posts.component';
import { M10_AnimacioComponent } from './components/posts/m10-animacio.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterPipe2 } from './pipes/filter.pipe2';
import { FilterPipe3 } from './pipes/filter.pipe3';
import { FormsModule } from '@angular/forms';
import { favoritos } from './favoritos';
import { CommonModule } from '@angular/common'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogOverviewExampleDialog} from './components/posts/posts.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MatAnimatedIconComponent,
    favoritos,
    PostsComponent,
    FilterPipe,
    FilterPipe2,
    FilterPipe3,
    DialogOverviewExampleDialog,
    M10_AnimacioComponent
  ],
  exports: [
    MatDialogModule,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule,
    
    CommonModule
  ],
 
  providers: [],
  bootstrap: [PostsComponent]
})
export class AppModule { }
