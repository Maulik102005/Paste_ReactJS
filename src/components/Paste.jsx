import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PastePDFDocument from "../pdf/PastePDFDocument";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPaste, setSelectedPaste] = useState(null);

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  return (
    <div>
      <input
        className="p-2 rounded w-300 mb-10 mt-8 border-2 border-white/50"
        type="search"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="flex flex-col gap-5 border-amber-50">
        {filteredData.length > 0 &&
          filteredData.map((paste) => (
            <div
              className="flex flex-row border rounded-2xl w-300 h-45"
              key={paste?._id}
            >
              <div className="flex flex-col mt-5 gap-3 w-280 ml-4">
                <div className="font-bold text-2xl">{paste.title}</div>
                <div>{paste.content}</div>
              </div>
              <div className="flex flex-row cursor-pointer mt-5 w-95 mr-3 justify-end">
                <button className="border px-2 py-1 rounded h-10 w-10 transform transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                  <a href={`/?pasteId=${paste?._id}`}>
                    <img src="edit_icon.webp" alt="Edit" />
                  </a>
                </button>
                <button
                  className="border px-2 py-1 rounded h-10 w-10 transform transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                  onClick={() => {
                    navigator.clipboard.writeText(paste?.content);
                    toast.success("Copied to Clipboard");
                  }}
                >
                  <img src="copy.webp" alt="Copy" />
                </button>
                <button
                  className="border px-2 py-1 rounded cursor-pointer h-10 w-10 transform transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                  onClick={() => handleDelete(paste?._id)}
                >
                  <img src="delete.webp" alt="Delete" />
                </button>
                <PDFDownloadLink
                  document={<PastePDFDocument paste={paste} />}
                  fileName={`${paste.title || "paste"}.pdf`}
                >
                  {({ loading }) =>
                    loading ? (
                      <button className="...">Loading PDF...</button>
                    ) : (
                      <button className="border px-2 py-1 rounded h-10 w-10 transform transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                        <img src="download.webp" alt="Download" />
                      </button>
                    )
                  }
                </PDFDownloadLink>
                <button className="border px-2 py-1 rounded cursor-pointer h-10 w-10 transform transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                  <a href={`/pastes/${paste?._id}`}>
                    <img src="view.webp" alt="View" />
                  </a>
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Paste;
