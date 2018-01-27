import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  headerCollapsed: boolean;
  query: string;
  constructor(private router: Router, private route: ActivatedRoute, private titleService: Title) {
    titleService.setTitle('Securing your future.');
    this.headerCollapsed = true;
    this.query = '';
  }
  ngOnInit() {
    this.route
    .queryParams
    .subscribe((params) => {
      this.query = params['q'] || '';  
    });       
  }
  showSearchBar(): boolean {
    return this.router.isActive('/admin-search', false);
  }
  getTitle() {
    return this.titleService.getTitle();
  }
}
