import React, { useState } from "react";

function CreateNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;

    setNote((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
    console.table(note);
  };

  function addEvent() {
    props.passNote(note);
  }
  return (
    <div className="create_note ">
      <form className="flex flex-col">
        <div className="button text-2xl w-[80%] flex mx-auto p-1">
          <input
            className="bg-white w-[80%] mx-auto px-4 py-2 my-2  font-semibold text-black rounded-lg border-2 border-yellow-300"
            type="text"
            name="title"
            value={note.title}
            onChange={InputEvent}
            placeholder="Title"
          />
          <button
            className=" px-4 py-2 my-2 w-fit ml-2 rounded-xl border-2 border-yellow-300"
            onClick={addEvent}
          >
            ➕{" "}
          </button>
        </div>
        <textarea
          className=" w-[80%] h-[20vh] mx-auto px-4 py-2 my-2 text-base font-medium text-black rounded-lg border-2 border-yellow-300"
          value={note.content}
          onChange={InputEvent}
          placeholder="Write a note..."
          name="content"
          id=""
        ></textarea>
      </form>
    </div>
  );
}

export default CreateNote;
