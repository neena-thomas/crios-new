import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isModalOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public closeModal() {
    this.isModalOpen = false;
  }
  public openModal() {
    this.isModalOpen = true;
  }

}
