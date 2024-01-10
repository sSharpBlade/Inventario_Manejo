import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  usuId?: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.usuId = params['id'];
    });
  }

}