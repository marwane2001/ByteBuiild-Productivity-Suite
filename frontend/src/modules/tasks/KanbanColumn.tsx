import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import type { Column, Task } from '../types'; // Correct path

export default function KanbanColumn({ column }: { column: Column }) {
  return (
    <Droppable droppableId={column.id}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="w-72 bg-gray-100 p-4 rounded-lg"
        >
          <h3 className="font-bold mb-4">{column.title}</h3>
          {column.tasks.map((task: Task, index: number) => (
            <Draggable key={task.id} draggableId={task.id} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className="bg-white p-4 mb-2 rounded shadow"
                >
                  {task.content}
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}