import { InMemoryDbService } from 'angular-in-memory-web-api';
export class APIService implements InMemoryDbService {
  createDb() {
    const attendees = [
      { id: 1, name: 'Andres', updated_at: Date.now(), photo: 'http://learnpad.com/uk/wp-content/uploads/2014/04/c.png' },
      { id: 2, name: 'Juan', updated_at: Date.now(), photo: 'http://learnpad.com/uk/wp-content/uploads/2014/04/c.png' },
      { id: 3, name: 'Mateo', updated_at: Date.now(), photo: 'http://learnpad.com/uk/wp-content/uploads/2014/04/c.png' },
      { id: 4, name: 'Wilson', updated_at: Date.now(), photo: 'http://learnpad.com/uk/wp-content/uploads/2014/04/c.png' },
      { id: 5, name: 'Ricardo', updated_at: Date.now(), photo: 'http://learnpad.com/uk/wp-content/uploads/2014/04/c.png' },
      { id: 6, name: 'Laura', updated_at: Date.now(), photo: 'http://learnpad.com/uk/wp-content/uploads/2014/04/c.png' },
      { id: 7, name: 'Angela', updated_at: Date.now(), photo: 'http://learnpad.com/uk/wp-content/uploads/2014/04/c.png' },
      { id: 8, name: 'Harlen', updated_at: Date.now(), photo: 'http://learnpad.com/uk/wp-content/uploads/2014/04/c.png' },
      { id: 9, name: 'Cesar', updated_at: Date.now(), photo: 'http://learnpad.com/uk/wp-content/uploads/2014/04/c.png' },
      { id: 10, name: 'Cristian', updated_at: Date.now(), photo: 'http://learnpad.com/uk/wp-content/uploads/2014/04/c.png' },
      { id: 11, name: 'Jhon', updated_at: Date.now(), photo: 'http://learnpad.com/uk/wp-content/uploads/2014/04/c.png' }
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