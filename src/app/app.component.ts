import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from './model/post.model';
import { IPostService } from './interface/ipost-service.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  posts: Observable<Post[]> = this.postService.getPosts();

  constructor(private postService: IPostService) {
  }

  onAddPostClick() {
    const post: Post = {
      'title': this.title,
      'author': 'Sam'
    };

    this.postService.addPost(post);
    this.posts = this.postService.getPosts();

    this.title = '';
  }

  onReloadClick() {
    this.posts = this.postService.getPosts();
  }
}
