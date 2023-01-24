import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User = {
    name: "Dian",
    prenom: "Michelle",

    
    profilePictureUrl: "https://www.shareicon.net/data/512x512/2016/09/15/829453_user_512x512.png",
  }

  constructor() { }

  ngOnInit(): void {
  }

  getFullName(user: User) {
    return `${user.name} ${user.prenom}`;
  }

}

class User {
  name?: String;
  prenom?: String;
  profilePictureUrl?: String;
}
