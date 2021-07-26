import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {
  of ,
  Subscription
} from 'rxjs';
import {colors} from '../../../../consts';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
){}
  public colors: typeof colors = colors;
  selectedOption: String = 'topstories'
  options: any[] = [{label:'Top', value:'topstories'},{label:'Ask', value:'askstories'},{label:'Show', value:'showstories'},{label:'Jobs', value:'jobstories'}]
  feed: any;
  feed1: any;
  feed$: Subscription;
  pageSize: number = 7;
  offset: number = 0;
  dataSource: any;
  search:'';
  searchText
  ngOnInit(){
    this.selectedOption = 'topstories'
    this.getHackerNewsData('topstories');
  //   this.interval = setInterval(() => { 
  //     this.getData(); 
  // }, 10000);
  }

  getHackerNewsData(val) {
    this.http.get('https://hacker-news.firebaseio.com/v0/'+val+'.json?print=pretty')
    .subscribe(data => {
      this.feed = data
      this.getData()
    })
  }

  async getData() {
    let newDetails = [];
    let count = 0;
    this.feed.slice(this.offset,(this.pageSize + this.offset)).forEach(async id => {
      console.log(id)
      this.http.get('https://hacker-news.firebaseio.com/v0/item/'+ id +'.json?print=pretty')
      .subscribe(res => {
        console.log(res)
      this.feed1 = res
      newDetails.push(this.feed1);
      console.log(newDetails)
      count++;
      if(count === this.pageSize){
          
          this.dataSource = newDetails
          this.offset = this.pageSize + this.offset
      }
      })
      
    })
  }

  newsDetails(url) {
    window.open(url);
  }

  authorDetails(author){
    window.open("https://hacker-news.firebaseio.com/v0/user/"+author+".json?print=pretty");
    
  }
}
