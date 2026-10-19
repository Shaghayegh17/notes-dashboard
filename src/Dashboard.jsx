import { useEffect, useRef, useState } from "react";

export function Dashboard() {
  const [input, setInput] = useState("");
  const [userNotes, setUserNotes] = useState([]);

  const inputRef = useRef(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleFocus = () => {
    inputRef.current.focus();
  };
  const handleAdd = () => {
    setUserNotes([...userNotes, input]);
    setInput("");
    handleFocus();
  };

  useEffect(() => {
    handleFocus();
    console.log("اجرا شد");
  }, []);
  console.log(userNotes);
  // useEffect(() => saveNotes(), [note]);
  return (
    <div>
      <input type="text" ref={inputRef} value={input} onChange={handleChange} />
      <button onClick={handleAdd}>اضافه کردن به لیست</button>

      <ul>
        {userNotes.map((notesitem) => (
          <li key={notesitem}>{notesitem}</li>
        ))}
      </ul>
    </div>
  );
}
