import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const Home4 = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams("");
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }
    }
  }, [pasteId]);

  function createPaste() {
    console.log("Button clicked");
    const paste = {
      title: title,
      content: value,
      _id:
        pasteId && pasteId !== "undefined" ? pasteId : Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (title) {
      if (pasteId) {
        dispatch(updateToPastes(paste));
      } else {
        dispatch(addToPastes(paste));
      }

      //after create/update
      setTitle("");
      setValue("");
      setSearchParams({});
    } else {
      alert("Please enter a title");
    }
  }

  return (
    <div>
      <div className="flex flex-row gap-7 mt-8 w-275">
        <input
          className="p-1 rounded-2xl mt-2 w-[90%] pl-5 border-2 border-white/50 focus:placeholder-transparent"
          type="text"
          placeholder="Enter title here..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button
          onClick={createPaste}
          className="border-2 border-white/50 bg-blue-500 text-white hover:border-white px-4 py-2 rounded-md w-50 cursor-pointer "
        >
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button>
      </div>
      <div className="mt-8">
        <textarea
          className="flex justify-center rounded-2xl w-275 p-4 border-2 border-white/50 focus:placeholder-transparent"
          type="text"
          value={value}
          placeholder="Enter content here..."
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
};

export default Home4;
