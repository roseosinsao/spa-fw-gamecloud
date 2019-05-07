import { Injectable } from '@angular/core'
import { MenuItem } from 'src/shared/models/menu-item.model';

@Injectable()
export class MenuService {
    items: Array<MenuItem>;
}