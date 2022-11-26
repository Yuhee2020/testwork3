import React from 'react';
import {Todolist} from "./components/todolist/Todolist";
import dayjs from "dayjs";

// export const todolist1 = {
//     todolistTitle: "What to do?",
//     todolistId: 123,
//     todolistImage: "image",
//     tasks: [
//         {taskId: 12, taskTitle: "learn js", deadline: "203158", taskImage: "image1", checked: false},
//         {taskId: 13, taskTitle: "learn React", deadline: "203258", taskImage: "image2",checked: false},
//         {taskId: 14, taskTitle: "learn TS", deadline: "023658", taskImage: "image",checked: false},
//         {taskId: 15, taskTitle: "learn Redux", deadline: "2365898", taskImage: "image",checked: false},
//     ]
// }

function App() {

    return (
        <div className="App">
            <Todolist/>
        </div>
    );
}

export default App;
