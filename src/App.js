import Header from './components/Header/Header';
import './App.css';
import Form from './components/Form/Form';
import { useState } from 'react';
import AddBtn from './components/AddBtn/AddBtn';
import TodoList from './components/TodoList/TodoList';
import TodoProvider from './components/Context/TodoProvider';
import SelectBox from './components/Select/Select';
function App() {
  const [showForm, setShowForm] = useState(false)

  const showFormHandler = () => {
    setShowForm(!showForm)
    return (showForm)
  }

  return (
    <>
      <TodoProvider>
        <Header />
        <AddBtn showFormHandler={showFormHandler} showForm={showForm} />
        <Form showFormHandler={showFormHandler} showForm={showForm} />
        <TodoList showFormHandler={showFormHandler} />
      </TodoProvider>

    </>
  )
}

export default App;
