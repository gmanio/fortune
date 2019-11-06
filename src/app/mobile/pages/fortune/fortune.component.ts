import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fortune',
  templateUrl: './fortune.component.html',
  styleUrls: ['./fortune.component.scss']
})
export class FortuneComponent implements OnInit {
  private sampleUrl = '/api/contents/freeunse/dayjiji.nate?jijiPage=3&jiji=00&dateparam=2';

  constructor(private http: HttpClient) {
    this.http
    .get(this.sampleUrl, {
      responseType: 'text'
    })
    .subscribe((res) => {
      console.log(res);
    });
  }

  ngOnInit() {
  }

}
