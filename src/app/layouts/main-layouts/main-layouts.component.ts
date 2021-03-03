import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';
import { SidebarMenu } from 'src/app/core/constants/sidebar-menu';

@Component({
  selector: 'app-main-layouts',
  templateUrl: './main-layouts.component.html',
  styleUrls: ['./main-layouts.component.scss']
})
export class MainLayoutsComponent implements OnInit {

  sidebarMenu: NbMenuItem[] = SidebarMenu;
  selectedItem = '2';
  constructor(
    private nbSidebarService: NbSidebarService,

  ) { }

  ngOnInit(): void {
  }


  toggleSidebar() {
    this.nbSidebarService.toggle(true, 'left');
  }

}
