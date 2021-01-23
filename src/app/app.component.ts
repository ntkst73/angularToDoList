import { Component } from '@angular/core';

export interface  Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {
      title: 'studying Angular',
      text: 'to-do list',
      id: 1
    },
    {
      title: 'studying #C',
      text: 'in the process',
      id: 2
    },
  ]

  updatePosts(post: Post) {
    this.posts.unshift(post)
  }

  removePost(id: number) {
    this.posts = this.posts.filter(p => p.id !== id)
  }
}
