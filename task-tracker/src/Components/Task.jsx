import { useState } from "react"

const Task = () => {
    const [tasks, setTasks] = useState(
        // Adding array of tasks 
        [
            {id: 1,
            text: 'wake Up',
            day: 'Monday at 05:00',
            reminder: true,
            },
            {id: 2,
            text: 'Exercise',
            day: 'Monday at 05:15',
            reminder: false,
            },
            {id: 3,
                text: 'Start Coding',
                day: 'Monady at 07:00',
                reminder: true,
            },
        ])
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
      
    </>
  )
}

export default Task
