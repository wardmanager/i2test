import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
//import { User } from '../../models/user';
//import { GithubUsers } from '../../providers/github-users';
//import { UserDetailsPage } from '../user-details/user-details';

import { PingPage } from '../ping/ping';
import { ProfilePage } from '../profile/profile';
import { AuthService } from '../../services/auth/auth.service';


@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = PingPage;
  tab2Root: any = ProfilePage;

  constructor(public auth: AuthService) {}

    ionViewDidLoad() {
        console.log('Hello Tabs Page');
    }
}