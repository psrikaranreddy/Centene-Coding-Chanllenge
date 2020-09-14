import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private menus: MenuItem[]=[
    {link:'/admin/dashboard', icon: 'dashboard', label:'Dashboard'},
    {link:'/admin/enrollee/list', icon: 'perm_identity', label:'Enrollee'},
    {link:'/admin/notifications', icon: 'sms', label:'Notifications'},
    {link:'/admin/menus', icon: 'topic', label:'Menus'},
    {link:'/admin/roles', icon: 'rule_folder', label:'Roles'},
    {link:'/admin/users', icon: 'supervisor_account', label:'Users'},

  ];
  constructor() { }

  getMenus(){
    return this.menus;
  }
}
