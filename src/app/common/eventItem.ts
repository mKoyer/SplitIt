export class EventItem {
  id: number;
  name: string;
  ownerId: number;
  otherUsersIds: number[];
  eventStatus: EventStatus;
  currencyId: number;
}
