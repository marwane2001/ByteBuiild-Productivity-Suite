export interface Task {
    id: string;
    content: string;
  }
  
  export interface Column {
    id: string;
    title: string;
    tasks: Task[];
  }