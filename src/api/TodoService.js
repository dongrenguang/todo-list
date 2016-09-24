const TODOS_KEY = 'todos';
const instantiateGuardSymbol = Symbol('instantiateGuard');
const storeTodoSymbol = Symbol('storeTodo');
const getTodosSymbol = Symbol('getTodo');
let singleton = null;

export default class TodoService {
  constructor(instantiateKey) {
    if (instantiateKey !== instantiateGuardSymbol) {
      throw new Error('Please use TodoService.getInstance() to get instance.');
    }
  }

  static getInstance() {
    if (singleton === null) {
      singleton = new TodoService(instantiateGuardSymbol);
    }
    return singleton;
  }

  // Suppose createTodo is an asynchronous process, such as requesting remote server.
  async createTodo(todo) {
    let id;
    try {
      // Deliberately delay.
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 500);
      });

      const todos = await this[getTodosSymbol]();
      id = todos.length + 1;
      const newTodo = { ...todo, id };
      todos.push(newTodo);
      await this[storeTodoSymbol](todos);
      return id;
    }
    catch(error) {
      id = -1;
      console.error(error);
    }
    return id;
  }

  // Suppose toggleTodo is an asynchronous process, such as requesting remote server.
  async toggleTodo(id) {
    try {
      // Deliberately delay.
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 500);
      });

      const todos = await this[getTodosSymbol]();
      for (let i = 0; i < todos.length; i += 1) {
        if (todos[i].id === id) {
          todos[i].completed = !todos[i].completed;
          break;
        }
      }
      await this[storeTodoSymbol](todos);
    }
    catch(error) {
      console.error(error);
    }
  }

  // Suppose fetchTodos is an asynchronous process, such as requesting remote server.
  async fetchTodos() {
    let todos = [];
    try {
      // Deliberately delay.
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 500);
      });

      todos = await this[getTodosSymbol]();
    }
    catch(error) {
      console.error(error);
    }
    return todos;
  }

  // Private function.
  async [storeTodoSymbol](todos) {
    try {
      window.localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
    }
    catch(error) {
      console.error(error);
    }
  }

  // Private function.
  async [getTodosSymbol]() {
    let result;
    try {
      result = JSON.parse(window.localStorage.getItem(TODOS_KEY));
    }
    catch(error) {
      console.error(error);
    }
    return result || [];
  }
}
