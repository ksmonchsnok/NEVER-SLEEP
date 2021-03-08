import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbMenuItem, NbMenuService } from '@nebular/theme';
import { UserMenu } from 'src/app/core/constants/user-menu';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})

export class UserMenuComponent implements OnInit {
  watcher: Subscription;
  userMenu: NbMenuItem[] = UserMenu; 
  activeMediaQuery: string | undefined;
  userName = "Linna Li";
  position = "Marketing";
  imgUser = "../../../assets/images/payu.jpg"

constructor(
    private mediaObserver: MediaObserver,
    private nbMenuService: NbMenuService,
    private router: Router,
  ) 
  { 
    this.watcher = this.mediaObserver.media$.subscribe(
      (change: MediaChange) => {
        this.activeMediaQuery = change.mqAlias;
      }
    );
  }

  ngOnInit(): void {
    this.userActionMenu();

  }
    
  userActionMenu() {
    this.nbMenuService.onItemClick().pipe(filter(({ tag }) => tag === 'user-menu'),map(({ item: { title } }) => title)
      )
      .subscribe((title) => {
        switch (title) {
          case 'Profile':
            this.router.navigate(['/admin/profile']);
            break;
          case 'Change password':
            this.router.navigate(['/admin/change-password']);
            break;
          case 'Sign out':
            this.router.navigate(['/logout']);
            break;
        }
      });
  }

}