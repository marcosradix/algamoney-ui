import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  collapse: string = "collapse";

  mouseLeaveStarEvent(){
    let leave = this.collapse = `${this.collapse}`
    console.log("mouseLeaveStarEvent", leave)
  }

  constructor() { }

  ngOnInit() {
  }

}
