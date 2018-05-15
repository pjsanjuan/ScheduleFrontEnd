import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {id: 1, first_name: 'Patrick', last_name: 'San Juan', email: 'psanjuan@sfu.ca'},
      {id: 2, first_name: 'Jack', last_name: 'Daniels', email: 'jd@sfu.ca'},
      {id: 3, first_name: 'Chris', last_name: 'Pratt', email: 'cp@sfu.ca'},
      {id: 4, first_name: 'Chris', last_name: 'Hemsworth', email: 'ch@sfu.ca'},
    ];
    return {users};
  }
}
