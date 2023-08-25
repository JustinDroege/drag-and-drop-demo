import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";

const userData = [
  {
    id: uuidv4(),
    name: "Joe Mama",
    age: 9,
  },
  {
    id: uuidv4(),
    name: "Dinkelberg",
    age: 17,
  },
  {
    id: uuidv4(),
    name: "Sherwood",
    age: 19,
  },
  {
    id: uuidv4(),
    name: "Baljeet",
    age: 21,
  },
];

export default function App() {
  const [users, setUsers] = useState(userData);

  const handleDragEnd = () => {};

  return (
    <main className="bg-white text-black select-none w-full min-h-screen flex justify-center items-center">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="users">
          {(provided) => (
            <ul
              className="flex flex-col gap-5"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {users.map((user, index) => (
                <Draggable key={user.id} draggableId={user.id} index={index}>
                  {(provided) => (
                    <li
                      className="p-4 border-2 rounded-lg"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {user.name} is {user.age} years old.
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </main>
  );
}
