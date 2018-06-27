import {User} from './user';

export class EventItem {
  id: number;
  name: string;
  ownerId: number;
  otherUsersIds: number[];
}
