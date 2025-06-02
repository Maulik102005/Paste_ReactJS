import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";
const ViewPaste4 = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.filter((p) => p._id === id)[0];
  return (
    <div>
      <div className="flex flex-row gap-7 place-content-between mt-10 border-2 border-white/50 rounded">
        <input
          className="p-1 rounded-2xl mt-2 w-[66%] pl-5"
          type="text"
          value={paste.title}
          disabled
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mt-8 border-2 border-white/50 w-275 rounded">
        <textarea
          className="flex justify-center rounded-2xl min-w-[500px] p-4"
          type="text"
          value={paste.content}
          disabled
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
};

export default ViewPaste4;
