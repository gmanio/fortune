import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-fortune',
  templateUrl: './fortune.component.html',
  styleUrls: ['./fortune.component.scss']
})
export class FortuneComponent implements OnInit {
  private sampleUrl = '/api/contents/freeunse/dayjiji.nate?jijiPage=3&jiji=00&dateparam=2';
  public sanitizeHtmlContent;

  constructor(private http: HttpClient,
              private sanitizer: DomSanitizer) {
    this.http
    .get(this.sampleUrl, {
      responseType: 'text'
    })
    .subscribe((res) => {
      this.sanitizeHtmlContent = this.sanitizer.bypassSecurityTrustHtml(res);
      console.log(res);
    });
  }

  ngOnInit() {
  }

}
