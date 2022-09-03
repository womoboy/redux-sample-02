import { useState } from "react";

const Todos = () => {
    const [todo, setTodo] = useState("");

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    return (
        <div className="addTodos">
            <input type="text" onClick={(e) => handleChange(e)} className="todo-input" />
            <button className="add-btn">Add</button>
        </div>
    )
}

export default Todos;