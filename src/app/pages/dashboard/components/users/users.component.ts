import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

@Component({
  selector: 'user-details',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UserDetailComponent implements OnInit {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}
  feed: any;
  feed1: any;
  feed$: Subscription;
  interval: any;
  user: any;
  id: String;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getHackerNewsData(this.id);
  }

  async getHackerNewsData(id) {
    this.http
      .get(
        'https://hacker-news.firebaseio.com/v0/user/' +
          id +
          '.json?print=pretty'
      )
      .subscribe((data) => {
        this.feed = data;
        this.user = this.feed;
      });
  }
}
