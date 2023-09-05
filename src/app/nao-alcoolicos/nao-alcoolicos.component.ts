import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nao-alcoolicos',
  templateUrl: './nao-alcoolicos.component.html',
  styleUrls: ['./nao-alcoolicos.component.css']
})
export class NaoAlcoolicosComponent implements OnInit {

  isNonAlcoolicosRouteActive: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.url.subscribe(urlSegments => {
      this.isNonAlcoolicosRouteActive = urlSegments.join('/') === 'nao-alcoolicos';
    });
  }
}
