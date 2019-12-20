import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  friendId: number;
  friend: User;

  constructor(private activateRoute: ActivatedRoute, private userService: UserService) {
    this.friendId = this.activateRoute.snapshot.params['uid'];
    this.friend = this.userService.getFriendById(this.friendId);
  }

  ngOnInit() {
  }

}
