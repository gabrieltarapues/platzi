import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private friends: User[] = [];
  private friend: User;
  constructor() {

    for (let x = 0; x < 8; x++) {
      const index: number = x + 1;
      const isPair = index % 2 == 0;
      const isDivisibleBy3 = index % 3 == 0;
      console.log(x, index, isDivisibleBy3);
      this.friend = {
        nickName: 'Gabriel ' + index,
        edad: 12,
        email: 'abc' + index + '@abc.com',
        friend: isPair,
        uid: index,
        status: isDivisibleBy3 ? 'logo_live_away' : isPair ? 'logo_live_online' : 'logo_live_offline'
      };

      this.friends.push(this.friend);
    }
  }

  getFriends() {
    return this.friends;
  }

  getFriendById(friendId: number) {
    return this.friends.find((record) => {
      return record.uid == friendId;
    });
  }
}
