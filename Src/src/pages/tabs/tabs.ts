import { Component } from '@angular/core';

import { RedditsPage } from '../reddits/reddits';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RedditsPage;
  tab2Root = SettingsPage;

  constructor() {

  }
}
