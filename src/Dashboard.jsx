import { useEffect, useRef, useState } from "react";

export function Dashboard() {
  const [input, setInput] = useState("");

  const [userNotes, setUserNotes] = useState(
    () => JSON.parse(localStorage.getItem("userNotes")) || [],
  );

  const saveChanges = () => {
    localStorage.setItem("userNotes", JSON.stringify(userNotes));
  };

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
  // مخصوص لود شدن فوکس اولیه
  useEffect(() => {
    handleFocus();
  }, []);

  useEffect(() => {
    saveChanges();
  }, [userNotes]);
  return (
    <div>
      <input type="text" ref={inputRef} value={input} onChange={handleChange} />
      <button onClick={handleAdd}>اضافه کردن به لیست</button>
      <p>تعداد یادداشت ها: {userNotes.length}</p>

      <ul>
        {userNotes.map((notesitem) => (
          <li key={notesitem}>{notesitem}</li>
        ))}
      </ul>
    </div>
  );
}
