import { Component, OnInit } from '@angular/core';
import { SectionsService } from '../services/sections.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  sections: string[] = [];

  constructor(private sectionsService: SectionsService) { }

  ngOnInit(): void {
    this.getSections();
  }

  getSections(): void {
    this.sectionsService.getSections()
      .subscribe(sections => this.sections = sections);
  }
}
