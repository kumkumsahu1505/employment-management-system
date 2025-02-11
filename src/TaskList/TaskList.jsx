import React from 'react'
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import FailedTask from './FailedTask';
import CompletedTask from './CompleteTask';

export default function TaskList({ data }) {
  const color = ['pink-900', 'indigo-900', 'orange-950', 'blue-950', 'green-800', 'yellow-800'];

  return (
    <div id='taskList' className='h-[55%] w-full flex items-center justify-start gap-5 flex-nowrap mt-10 rounded-t-2xl py-5 overflow-x-auto'>
      {data.tasks.map((task, index) => {
        if (task.activeTask) {
          return (
            <AcceptTask
              key={index}
              color={color[index % color.length]}  // Use modulo to prevent out of bounds
              title={task.taskTitle}
              description={task.taskDescription}
              date={task.taskDate}
              category={task.category}
            />
          );
        }

        if (task.failedTask) {
          return (
            <FailedTask
              key={index}
              color={color[index % color.length]}  // Use modulo to prevent out of bounds
              title={task.taskTitle}
              description={task.taskDescription}
              date={task.taskDate}
              category={task.category}
            />
          );
        }

        if (task.newTask) {
          return (
            <NewTask
              key={index}
              color={color[index % color.length]}  // Use modulo to prevent out of bounds
              title={task.taskTitle}
              description={task.taskDescription}
              date={task.taskDate}
              category={task.category}
            />
          );
        }

        if (task.completed) {
          return (
            <CompletedTask
              key={index}
              color={color[index % color.length]}  // Use modulo to prevent out of bounds
              title={task.taskTitle}
              description={task.taskDescription}
              date={task.taskDate}
              category={task.category}
            />
          );
        }

        return null;  // Return null if no conditions are met
      })}
    </div>
  );
}
