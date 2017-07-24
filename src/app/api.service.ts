import { InMemoryDbService } from 'angular-in-memory-web-api';
export class APIService implements InMemoryDbService {
  createDb() {
    const attendees = [
      { id: 1, name: 'Andres' },
      { id: 2, name: 'Juan' },
      { id: 3, name: 'Mateo' },
      { id: 4, name: 'Wilson' },
      { id: 5, name: 'Ricardo' },
      { id: 6, name: 'Laura' },
      { id: 7, name: 'Angela' },
      { id: 8, name: 'Harlen' },
      { id: 9, name: 'Cesar' },
      { id: 10, name: 'Cristian' }
    ];
    return {attendees};
  }
}