const instantiateGuardSymbol = Symbol('instantiateGuard');
const storeTodoSymbol = Symbol('storeTodo');
const getTodoSymbol = Symbol('getTodo');

const TODOS_KEY = 'todos';
export default class TodoService {
  static _instance = null;

  static getInstance() {
    if (TodoService._instance === null) {
      TodoService._instance = new TodoService(instantiateGuardSymbol);
    }
    return TodoService._instance;
  }

  constructor(instantiateKey) {
    if (instantiateKey !== instantiateGuardSymbol) {
      throw new Error('The constructor of TodoService is private, please use TodoService.getInstance() to get instance.');
    }
  }

  // Suppose createTodo is an asynchronous process, such as requesting remote server.
  async createTodo(todo) {
    try {
      let todos = await this.fetchTodos();
      const id = todos.length + 1;
      todo = { ...todo, id };
      todos.push(todo);
      await this[storeTodoSymbol](todos);
      return id;
    }
    catch(error) {
      console.error(error);
    }
  }

  // Suppose completeTodo is an asynchronous process, such as requesting remote server.
  async completeTodo(id) {
    try {
      let todos = await this.fetchTodos();
      for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
          todos[i].completed = true;
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
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
      const storedTodos = await this[getTodoSymbol]();
      if (storedTodos) {
        todos = storedTodos;
      }
    }
    catch(error) {
      console.error(error);
    }
    return todos;
  }

  // private
  async [storeTodoSymbol](todos) {
    try {
      window.localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
    }
    catch(error) {
      console.error(error);
    }
  }

  // private
  async [getTodoSymbol]() {
    try {
      return JSON.parse(window.localStorage.getItem(TODOS_KEY));
    }
    catch(error) {
      console.error(error);
    }
  }
}
