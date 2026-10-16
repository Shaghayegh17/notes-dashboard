import { useEffect, useRef, useState } from "react";

let notes = JSON.parse(localStorage.getItem("notes"))|| [];
const  saveNotes = ()=>{
    localStorage.setItem("notes",JSON.stringify(notes))}

export function Dashboard() {
  const inputRef = useRef(null);
  const [input, setInput] = useState("");
  const [notes,setNotes]=useState([])
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleFocus = () => {
    inputRef.current.focus();
  };
  useEffect(() => handleFocus
 , saveNotes,[notes]);
  return (
    <div>
      <input type="text" ref={inputRef} value={input} onChange={handleChange} />
      <ul>
        {notes
        .push(input)
        .map((note) => <li key={note}>{note}</li>)
        .join("")}
      </ul>
      
    </div>
  );
}
