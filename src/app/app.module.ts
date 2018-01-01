import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddPostComponent } from './component/add-post/add-post.component';
import { ListPostsComponent } from './component/list-posts/list-posts.component';
import { ShowCountComponent } from './component/show-count/show-count.component';
import { ReloadPostsComponent } from './component/reload-posts/reload-posts.component';
import { IAddPost } from './interface/iadd-post.interface';
import { IListPosts } from './interface/ilist-posts';
import { IShowCount } from './interface/ishow-count.interface';
import { IReloadPosts } from './interface/ireload-posts.interface';
import { PostService } from './service/post/post.service';

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
    PostService,
    {provide: IAddPost, useExisting: PostService},
    {provide: IListPosts, useExisting: PostService},
    {provide: IShowCount, useExisting: PostService},
    {provide: IReloadPosts, useExisting: PostService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
