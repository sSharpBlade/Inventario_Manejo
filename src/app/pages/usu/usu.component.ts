import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usu',
  templateUrl: './usu.component.html',
  styleUrl: './usu.component.css'
})
export class UsuComponent {
  userId?: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });
  }
}
