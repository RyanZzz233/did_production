export interface Todo {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
}

export class TodoService {
  static async fetchTodos(): Promise<Todo[]> {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const results = await fetch(url);
    const todos = results.json();
    return todos;
  }

  static async fetchTodoById(id: string): Promise<Todo> {
    const url = "https://jsonplaceholder.typicode.com/todos/" + id;
    const result = await fetch(url);
    const todo = result.json();
    return todo;
  }
}
