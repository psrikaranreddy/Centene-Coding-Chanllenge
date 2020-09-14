import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/shared/services/navigation.service';
import { MenuItem } from 'src/app/shared/models/menu-item';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  menus:MenuItem[] =[ ];
  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.menus = this.navigationService.getMenus()
  }

}
