import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHouse} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  faHouse = faHouse;
 
  constructor( private router:Router) { 
    
  }

  ngOnInit(): void {
  }

  logout(){
    
  }

}
