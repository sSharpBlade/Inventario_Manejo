import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bienes',
  templateUrl: './bienes.component.html',
  styleUrl: './bienes.component.css'
})
export class BienesComponent {
  usuId: any;

  constructor(private router: ActivatedRoute) {
    this.router.params.subscribe(params => {
      this.usuId = params['id'];
    });

    console.log("Usuario ", this.usuId);
  }
}
