import { Component } from '@angular/core';
import { MenuService } from 'src/services/menu.service';
import { initialMenuItems } from './app.menu';
import { languageMenu } from 'src/shared/models/language.menu';
import { LanguageService } from 'src/services/language.service';
import { LeaderboardConfigurationListModel } from 'src/shared/models/leaderboards/leaderboard-configuration-list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'spa-fw-gamecloud';
  leaderboards: Array<LeaderboardConfigurationListModel>;

  constructor(
    private menuService: MenuService,
    private languageService: LanguageService)
    {
    menuService.items = initialMenuItems;
    languageService.languages = languageMenu;
  }
}
