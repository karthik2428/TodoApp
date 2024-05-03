import React, { Component } from 'react'
import "./component/todo/todo"
import "./component/todo/todo.css"
import Todo from './component/todo/todo'
export default class App extends Component {
  render() {
    return (
      <div >
        <Todo />
      </div>
    )
  }
}
