import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-fortune',
  templateUrl: './fortune.component.html',
  styleUrls: ['./fortune.component.scss']
})
export class FortuneComponent implements OnInit {
  private sampleUrl = '/api/contents/freeunse/dayjiji.nate?jijiPage=3&jiji=00&dateparam=2';
  public sanitizeHtmlContent;
  public fortuneData$ = new BehaviorSubject(null);

  constructor(private http: HttpClient,
              private sanitizer: DomSanitizer) {
    // this.http
    // .get(this.sampleUrl, {
    //   responseType: 'text'
    // })
    // .subscribe((res) => {
    //   this.sanitizeHtmlContent = this.sanitizer.bypassSecurityTrustHtml(res);
    //   console.log(res);
    // });
  }

  ngOnInit() {
  }

  fetchData() {
    const fetch$ = this.http
    .get(this.sampleUrl, {
      responseType: 'text'
    }).pipe(
      map((res) => {
        this.fortuneData$.next(this.sanitizer.bypassSecurityTrustHtml(res));
      })
    ).subscribe();
  }

  getFortuneData() {
    this.fetchData();
    console.log('getFortuneData');
  }

}
