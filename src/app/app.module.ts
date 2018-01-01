import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IPostService } from './interface/ipost-service.interface';
import { PostService } from './service/post/post.service';
import { AddPostComponent } from './component/add-post/add-post.component';
import { ListPostsComponent } from './component/list-posts/list-posts.component';
import { ShowCountComponent } from './component/show-count/show-count.component';
import { ReloadPostsComponent } from './component/reload-posts/reload-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent,
    ListPostsComponent,
    ShowCountComponent,
    ReloadPostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: IPostService, useClass: PostService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
