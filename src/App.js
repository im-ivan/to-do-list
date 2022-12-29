import { useState } from 'react';
import { Button, Container, Navbar, NavbarBrand } from 'react-bootstrap';
import './App.css';


function App() {
  const [newTaskName, setNewTaskName] = useState("")
  const [taskList, setTaskList] = useState([])
  const getUniqueId = () => {
    let uid
    do {
      uid = Math.floor(Math.random() * 999)
    } while (taskList.some((task) => task.id === uid))
    return uid
  }
  const createTask = () => {

    setTaskList([...taskList, {
      id: getUniqueId(),
      name: newTaskName,
    }])
  }

  const removeTask = (taskToRemove) => {
    setTaskList(taskList.filter((task) =>
      task.id === taskToRemove.id ? false : true
    ))
  }
  return (
    <div className="App">
      <Navbar bg='dark' className='text-light'>
        <Container>
          <NavbarBrand className='text-light'>
            To do List
          </NavbarBrand>
          <input type="text" placeholder='ex: Jogar o lixo fora' onChange={(event) => setNewTaskName(event.target.value)} />
          <Button variant="outline-light" onClick={() => createTask()}>
            Adicionar tarefa
          </Button>
        </Container>
      </Navbar>
      <div className="task-list">
        {taskList.map((task) => {
          return (
            <div className='taskRow border rounded m-1 bg-light' key={task.id}>
              <Container className='d-flex justify-content-between align-items-center'>
                <p className='m-3'>
                  {task.id} - {task.name}
                </p>
                <Button variant='outline-danger m-3' onClick={() => removeTask(task)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                  </svg>
                </Button>
              </Container>
            </div>)
        })}
      </div>
    </div>
  );
}

export default App;
