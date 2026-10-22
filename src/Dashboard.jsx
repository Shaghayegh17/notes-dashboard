import { useEffect, useRef, useState } from "react";

export function Dashboard() {
  const [input, setInput] = useState("");

  const [warningText, setWarningText] = useState("");

  const [userNotes, setUserNotes] = useState(
    () => JSON.parse(localStorage.getItem("userNotes")) || [],
  );

  const saveChanges = () => {
    localStorage.setItem("userNotes", JSON.stringify(userNotes));
  };

  const inputRef = useRef(null);

  const handleChange = (e) => {
    setInput(e.target.value);
    setWarningText("");
  };
  const handleFocus = () => {
    inputRef.current.focus();
  };
  const handleAdd = () => {
    if (input.trim() !== "") {
      const id = crypto.randomUUID();
      setUserNotes([...userNotes, { Id: id, input: input.trim() }]);
      setWarningText("");
      setInput("");
    } else {
      setWarningText("محتوا نباید خالی باشد");
    }
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
      {warningText && <p>{warningText}</p>}

      <ul>
        {userNotes.map((notesitem) => (
          <li key={notesitem.Id}>{notesitem.input}</li>
        ))}
      </ul>
    </div>
  );
}
