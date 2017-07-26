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
    const tasks = [
      { id: 1, title: 'Tour of heores', end_date: '2017/07/22' },
      { id: 2, title: 'Tour of heores 2', end_date: '2017/07/23' },
      { id: 3, title: 'Tour of heores 3', end_date: '2017/07/24' }
    ];
    const notes = [
      { id: 1, value: 3.0, task: 'Task 1', attendee: 'Andres' },
      { id: 2, value: 3.0, task: 'Task 1', attendee: 'Juan' },
      { id: 3, value: 3.0, task: 'Task 1', attendee: 'Mateo' }
    ];
    return {attendees, tasks, notes};
  }
}