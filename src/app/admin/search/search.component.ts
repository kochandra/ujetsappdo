import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  query: string;
  constructor(private titleService: Title) {
    this.query = '';
   }

  ngOnInit() {
    this.titleService.setTitle('Submission Review');
  }

}
