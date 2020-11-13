import React, {useState, useEffect}from 'react';
import Form from './Form'
import User from './User'
import schema from './formSchema'

import axios from 'axios'
import './App.css';

const initialFormValues = { 
  username: "", 
  email: "", 
  password: "", 
  termsOfService: false
}

const submitDisabled = true



function App() {
  const [users, setUsers]=useState([])
  const [formValue, setFormValue]=useState(initialFormValues)
  const [disabled, setDisabled]=useState(submitDisabled)

  const getUsers = () => { 
    axios.get('https://reqres.in/api/users')
    .then((response) =>{ 
      
      setUsers(response.data.data)
    })
    .catch((err) => { 
      console.log("There was an error communicating with the server", err)
    })
  }

  useEffect(() => { 
   getUsers()
  }, [])

  useEffect(() => {
    
    schema.isValid(formValue)
    .then(valid => { 
      setDisabled(!valid)
    })
  }, [formValue])




  const inputChange = (name,value) => { 
    setFormValue({
      ...formValue,
      [name]: value 
    })
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then((response) => { 
      setUsers([...users, response.data])
      setFormValue(initialFormValues)
    })
    .catch((error) => { 
      console.log("Unable to post to server", error)
    })
  }
 

  const formSubmit = () => { 
    const newUser = { 
      username: formValue.username.trim(),
      email: formValue.email.trim(),
      
    }
    postNewUser()
    getUsers()
  }

  return (
    <div className="App">
      <div className='container'>
        <Form 
        values={formValue}
        change={inputChange}
        submit={formSubmit}
        disabled={setDisabled}
        updateChecked={setFormValue}
        
        />
        <User users={users}/>
      </div>
    </div>
  );
}

export default App;