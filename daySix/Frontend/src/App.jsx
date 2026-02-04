import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

  const API = "https://frontendintegration-t8hs.onrender.com/"
  const [notes, setNotes] = useState([])

  function fetchNotes(){
    axios.get(`${API}/api/notes`)
  .then(res=>{
    setNotes(res.data.notes)
  })
    
  }
  useEffect(()=>{
    fetchNotes();
    

  }, [])

  function handleSubmit(e){
    e.preventDefault();
    const {title, description} = e.target.elements;
    console.log(title.value, description.value)

    axios.post(`${API}/api/notes`,{
      title : title.value,
      description: description.value
    })
    .then(res => {
      fetchNotes()
    })

  }
  function handleDeleteNote(noteId){
    // console.log(noteId)
    alert("Are you sure you want to delete this note?")
    axios.delete(`${API}/api/notes/${noteId}`)
    .then(res=>{
      fetchNotes()
    })

  }
  function handleEditNote(noteId){
    const newDescription = prompt("Enter new description");
    axios.patch(`${API}/api/notes/${noteId}`,{
       description: newDescription 
    })
    .then(res=>{
      fetchNotes()
    })

  }
  
  return (

    <>
    <form action="" onSubmit={handleSubmit}> 
      <input name='title' type="text" placeholder='Enter Title'/>
      <input name='description' type="text" placeholder='Enter Description'/>
      <button>Add Note</button>
    </form>
    <div className='notes'>
      {notes.map(note => {
        return <div className='note'>
          <h1>{note.title}</h1>
          <p>
            {note.description}
          </p>
          <button onClick={()=>{
            handleDeleteNote(note._id)

          }}>Delete</button>
          <button onClick={()=>{
            handleEditNote(note._id)
          }}>Edit</button>

        </div>

      })}

    </div>
    </>
  )
}

export default App