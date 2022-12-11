import React, { useState } from 'react';
import Header from './component/Header';
import CreateNote from './component/CreateNote';
import Note from './component/Note';
import Footer from './component/Footer';
function App() {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    alert("clicked jdj"); 
    setAddItem((prevData)=>{
      return [...prevData, note];
    });
    console.table(note);
  };
  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      {
        addItem.map((val,index)=>{
          return(
            <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}
            />
          );
        })
      }
      <Footer />
    </>
  )
}

export default App