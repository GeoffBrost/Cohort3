import React from 'react';
import Header from './components/Header'
import Todos from './components/Todos'
import AddTodo from './components/Addtodo'
import uuid from 'uuid'

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "learn state",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Pass state",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "set state",
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }

    this.setState({ todos: [... this.state.todos, newTodo] })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
