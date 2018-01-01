import { Component } from '@angular/core';
import { Post } from '../../model/post.model';
import { IPostService } from '../../interface/ipost-service.interface';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  title: string;
  posts: Observable<Post[]> = this.postService.getPosts();

  constructor(private postService: IPostService) { }

  onAddPostClick() {
    const post: Post = {
      'title': this.title,
      'author': 'Sam'
    };

    this.postService.addPost(post);
    this.posts = this.postService.getPosts();

    this.title = '';
  }
}
