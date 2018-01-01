import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from '../../model/post.model';
import { IPostService } from '../../interface/ipost-service.interface';

@Component({
  selector: 'app-show-count',
  templateUrl: './show-count.component.html',
  styleUrls: ['./show-count.component.css']
})
export class ShowCountComponent {
  posts: Observable<Post[]> = this.postService.getPosts();

  constructor(private postService: IPostService) { }
}
