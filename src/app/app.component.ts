import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbSidebarService ,NbSearchService  } from '@nebular/theme';
import { SidebarMenu } from 'src/app/core/constants/sidebar-menu';@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})

export class AppComponent implements OnInit {
 
  sidebarMenu: NbMenuItem[] = SidebarMenu;
  selectedItem = '2';
  value : number | undefined;
  valueOnSearch = '';
  itemCatagories = [
    {
      name : 'ไอติม',
      value : 1
    },
    {
      name : 'ขนม',
      value : 2
    },
    {
      name : 'เค้ก',
      value : 3
    }
  ]
  constructor(
    private nbSidebarService: NbSidebarService,
    private searchService: NbSearchService

  ) {
    this.searchService.onSearchSubmit()
      .subscribe((data: any) => {
        this.valueOnSearch = data.term;
      })
   }


  ngOnInit(): void {
  }

  onSelectCatgories(event: number | undefined){
    this.value = event;
    console.log('Selected : ', this.value);
    

  }


  toggleSidebar() {
    this.nbSidebarService.toggle(true, 'left');
  }
}