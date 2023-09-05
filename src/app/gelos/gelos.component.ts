import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gelos',
  templateUrl: './gelos.component.html',
  styleUrls: ['./gelos.component.css']
})
export class GelosComponent implements OnInit {

  isGelosRouteActive: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void { 
    this.route.url.subscribe(urlSegments => {
      this.isGelosRouteActive = urlSegments.join('/') === 'gelos';
    });
  }
}
