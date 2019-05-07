import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'src/shared/models/menu-item.model';

@Component({
  selector: 'shared-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() item = <MenuItem>null;

  constructor() { }

  ngOnInit() {
  }

}
