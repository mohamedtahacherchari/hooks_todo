import React, { useState } from 'react'
import { Button ,Modal, Form } from "react-bootstrap"
import  shortid  from 'shortid';
const AddTodo = ({addTodo}) => {

   const [show,setShow] = useState(false)
   const [input,setInput] = useState('')

   const handleInput =(e) =>
   setInput(e.target.value)

    const toggole =() => {
        setShow(!show)
    }
     const add= () => {
       let newTodo={
         id : shortid.generate(),
         text :input}
          addTodo(newTodo)
          setInput('')


     }
    return (
        <div>
             <>
      <Button variant="primary" onClick={toggole}>
       Add Todo
      </Button>

      <Modal show={show} onHide={toggole}>
        <Modal.Header closeButton>
          <Modal.Title>New Todo To Add </Modal.Title>
        </Modal.Header>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Todo text</Form.Label>
    <Form.Control type="email" placeholder="Enter somthing todo.." 
    value={input}
    onChange={(e) => handleInput(e)} />
   
  </Form.Group>
  </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggole}>
            Close
          </Button>
          <Button variant="primary" onClick={add}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
        </div>
    )
}

export default AddTodo
