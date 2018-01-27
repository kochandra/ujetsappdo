import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AutofocusDirective } from '../directives/autofocus.directive';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  query: string;
  constructor(private titleService: Title, private route: ActivatedRoute, private router: Router) {
    this.query = '';
   }

  ngOnInit() {
    this.titleService.setTitle('Submission Review');
  }
  onSearch(query: string) {
    this.router.navigate(['/admin-search'], {queryParams: {q: query}});      
  }
}
