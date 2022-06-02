import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  searchInput: string = "";
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchInput']) {
        this.searchInput = params['searchInput'];
      }
    })
  }

  search(): void{
    if (this.searchInput) {
      this.router.navigateByUrl('/search/' + this.searchInput);
    }
  }

}
