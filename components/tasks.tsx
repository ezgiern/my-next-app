import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Tasks() {
  const [tasks, setTasks] = useState(new Array());
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetchTasks();
  }, new Array());

  const fetchTasks = async () => {
    const { data, error } = await supabase.from("tasks").select("*");
    if (error) console.error("Error fetching tasks:", error);
    else setTasks(data);
  };

  const addTask = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const { error } = await supabase
      .from("tasks")
      .insert([{ name: newTask, user_id: user?.id }]);
    if (error) console.error("Error adding task:", error);
    else fetchTasks();
  };

  return (
    <div>
      <h1>Tasks</h1>
      <input
        type="text"
        placeholder="New Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task["id"]}> {task["name"]}</li>
        ))}
      </ul>
    </div>
  );
}
