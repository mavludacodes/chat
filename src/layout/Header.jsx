import React from "react";
import Button from "../components/common/Button";

import { handleFile, saveFilePicker } from "../utils/fileUtils";

function Header({ setState, activeChats }) {
  const handleImport = (e) => {
    let file = e.target.files[0];
    handleFile(file)
      .then((res) => {
        setState((state) => ({
          ...state,
          activeChats: res,
        }));
        localStorage.setItem("chatList", JSON.stringify(res));
      })
      .catch((e) => console.log(e));
  };

  const clearBtn = (e) => {
    e.preventDefault();
    setState((state) => ({
      ...state,
      activeChats: [],
      archivedChats: [],
      currentChat: undefined,
    }));
  };

  const handleExport = (e) => {
    e.preventDefault();
    saveFilePicker(activeChats);
  };

  return (
    <header className="bg-[#F8FAFC] mx-10 p-5 flex gap-2 items-center">
      <div>
        <label
          className="cursor-pointer rounded-md bg-white px-3 py-2 text-sm  text-gray-900  ring-1 ring-inset ring-gray-300 hover:bg-gray-50 "
          htmlFor="content"
        >
          Import
        </label>

        <input
          className="hidden"
          type="file"
          id="content"
          onChange={(e) => handleImport(e)}
        />
      </div>

      <Button title="Export" handleClick={handleExport} />
      <Button title="Clear" handleClick={clearBtn} />
    </header>
  );
}

export default Header;
