import React,{ useState } from 'react';
import './App.css';
import Preview from "./components/Preview";
function App() {
  const [notes,setNotes]  = useState([]);
  const [title,setTitle]  = useState("");
  const [content,setContent] =  useState("");
  const [selectedNote,setSelectedNote]  = useState(null);
  const [creating,setCreating]  = useState(false);
  const [editing,setEditing] =  useState(false);
  
  const changeTitleHandler =(e) =>{
    setTitle(e.target.value)
  }
  const changeContentHandler =(e) =>{
    setContent(e.target.value)
  }
  const saveNoteHandler = ()=>{
    const note ={
      id:new Date(),
      title:title,
      content:content
    }
    const updatedNotes = [...notes,note];
    setNotes(updatedNotes);
    setCreating(false);
    setSelectedNote(note.id)
  }

  const getAddNote = () => {
    return (
      <div>
        <h2>إضافة ملاحظة جديدة</h2>
        <div>
          <input
            type="text"
            name="title"
            className="form-input mb-30"
            placeholder="العنوان"
            value={title}
            onChange={changeTitleHandler}
          />

          <textarea
            rows="10"
            name="content"
            className="form-input"
            placeholder="النص"
            value={content}
            onChange={changeContentHandler}
          />

          <a href="#" className="button green" onClick={saveNoteHandler}>
            حفظ
          </a>
        </div>
      </div>
    );
  };

  const getPreview = () => {
    return (
      <div>
        <div className="note-operations">
          <a href="#">
            <i className="fa fa-pencil-alt" />
          </a>
          <a href="#">
            <i className="fa fa-trash" />
          </a>
        </div>
        <div>
          <h2>عنوان ملاحظة تجريبية</h2>
          <p>نص ملاحظة تجريبية</p>
        </div>
      </div>
    );
  };
  const addNoteHandler = ()=>{
    setCreating(true);

  }
  return (
    <div className="App">
      <div className="notes-section">
        <ul className="notes-list">
          <li className="note-item">ملاحظة رقم #1</li>
          <li className="note-item">ملاحظة رقم #2</li>
          <li className="note-item">ملاحظة رقم #3</li>
          <li className="note-item">ملاحظة رقم #4</li>
        </ul>
        <button className="add-btn" onClick={addNoteHandler}>+</button>
      </div>
      <Preview>{creating ? getAddNote() : getPreview()}</Preview>
    </div>
  );
}

export default App;
