import React, { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import KanbanColumn from './KanbanColumn';

type Column = {
  id: string;
  title: string;
  tasks: Task[];
};

type Task = {
  id: string;
  content: string;
};

export default function KanbanBoard() {
  const [columns, setColumns] = useState<Column[]>([
    { id: 'todo', title: 'To Do', tasks: [] },
    { id: 'progress', title: 'In Progress', tasks: [] },
    { id: 'done', title: 'Done', tasks: [] },
  ]);

  const handleDragEnd = (result: DropResult) => {
    // Implement your drag-and-drop logic here
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex gap-4 p-4 h-screen">
        {columns.map((column) => (
          <KanbanColumn key={column.id} column={column} />
        ))}
      </div>
    </DragDropContext>
  );
}