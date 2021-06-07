import React from "react";
import Task from "./components/Task";
import InputTask from "./components/InputTask";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { id: 0, title: "Create to-do-list", done: false },
        { id: 1, title: "Read books for JS", done: true },
        { id: 2, title: "Watch Netflix", done: false },
        { id: 3, title: "Delete Netflix", done: false },
      ],
    };
  }
  addTask = (task) => {
    this.setState((state) => {
      let { tasks } = state;
      tasks.push({
        id: tasks.length != 0 ? task.length : 0,
        title: task,
        done: false,
      });
      return tasks;
    });
  };
  doneTask = (id) => {
    const index = this.state.tasks.map((task) => task.id).indexOf(id);
    this.setState((state) => {
      let { tasks } = state;
      tasks[index].done = true;
      return tasks;
    });
  };
  deleteTask = (id) => {
    const index = this.state.tasks.map((task) => task.id).indexOf(id);
    this.setState((state) => {
      let { tasks } = state;
      delete tasks[index];
      return tasks;
    });
  };
  render() {
    const { tasks } = this.state;
    const activeTasks = tasks.filter((task) => !task.done);
    const doneTasks = tasks.filter((task) => task.done);

    return (
      <div className="App">
        <h1 className="top">Active task:{activeTasks.length}</h1>
        {[...activeTasks, ...doneTasks].map((task) => (
          <Task
            doneTask={() => this.doneTask(task.id)}
            deleteTask={() => this.deleteTask(task.id)}
            task={task}
            key={task.id}
          ></Task>
        ))}
        <InputTask addTask={this.addTask}></InputTask>
      </div>
    );
  }
}

export default App;
