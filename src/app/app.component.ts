import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ssr-app';

  ngOnInit(): void {
    console.log(document.getElementsByTagName('a'));
  }
}
