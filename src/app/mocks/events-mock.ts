import {EventItem} from '../common/eventItem';
import {User} from '../common/user';

export const EVENTS: EventItem[] = [
  {id: 0, name: 'Spain Trip', ownerId: 0, otherUsersIds: [1, 2]},
  {id: 1, name: 'Dinner', ownerId: 0, otherUsersIds: null},
  {id: 2, name: 'Ann B-Day', ownerId: 1, otherUsersIds: [2]}
];
