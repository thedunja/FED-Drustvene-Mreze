import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'fb-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
  postList: Post[] = [];

  params = {
    'page': 1,
    'pageSize': 4,
    'sort': 'date',
    'sortDirection': 'asc',
  }

  constructor(private service: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.service.getPosts(this.params).subscribe({
      next: data => {
        this.postList = data.postList;
        console.log(data);

      },
      error: err => console.log(err)
    })
  }

  loadPosts(): void {
    this.params.pageSize += 4;
    this.ngOnInit()
  }
}
