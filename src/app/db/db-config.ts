import { DBConfig } from 'ngx-indexed-db';

export function migrationFactory() {
    return {
      1: (db, transaction) => {
        const store = transaction.objectStore('tasks');
        store.createIndex('duedate-repeat', ['dueDate', 'repeat'], { unique: false });
        store.createIndex('duedate-reftaskid', ['dueDate', 'refTaskId'], { unique: false });
      }
    };
  }

export const dbConfig: DBConfig  = {
    name: 'DoToDoDB',
    version: 1,
    objectStoresMeta: [{
      store: 'tasks',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } },
        { name: 'remarks', keypath: 'remarks', options: { unique: false } },
        { name: 'done', keypath: 'done', options: { unique: false } },
        { name: 'dueDateTime', keypath: 'dueDateTime', options: { unique: false } },
        { name: 'dueDate', keypath: 'dueDate', options: { unique: false } },
        { name: 'repeat', keypath: 'repeat', options: { unique: false } },
        { name: 'list', keypath: 'list', options: { unique: false } },
        { name: 'refTaskId', keypath: 'refTaskId', options: { unique: false } },
        { name: 'type', keypath: 'type', options: { unique: false } }
      ]
    },
    {
      store: 'settings',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } },
        { name: 'value', keypath: 'value', options: { unique: false } }
      ]
    },
    {
      store: 'notifications',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } },
        { name: 'active', keypath: 'active', options: { unique: false } }
      ]
    }],
    migrationFactory
  };