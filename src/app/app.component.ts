import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from './model/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  posts: Observable<Post[]>;

  onAddPostClick() {

  }

  onReloadClick() {

  }
}
