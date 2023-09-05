import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-destilados',
  templateUrl: './destilados.component.html',
  styleUrls: ['./destilados.component.css']
})
export class DestiladosComponent implements OnInit {

  isDestiladosRouteActive: boolean = false;

  constructor(private route: ActivatedRoute) {  }

  ngOnInit(): void {
    this.route.url.subscribe(urlSegments => {
      this.isDestiladosRouteActive = urlSegments.join('/') === 'destilados';
    });
  }
}
