import React from "react";

function Header({ setState, activeChats }) {
  const handleFile = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];

    if (file) {
      var extension = file.name.split(".").pop().toLowerCase();
      var isSuccess = ["json"].indexOf(extension) > -1;
    }

    if (isSuccess) {
      reader.onloadend = () => {
        console.log(reader.result);
        setState((state) => ({
          ...state,
          activeChats: JSON.parse(reader.result),
        }));
        localStorage.setItem("chatList", reader.result);
      };

      reader.readAsText(file);
    } else {
      console.log("wrong format");
    }
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

  const saveFilePicker = async (e) => {
    e.preventDefault();
    const blob = new Blob([JSON.stringify(activeChats)]);
    try {
      // Show the file save dialog.
      const handle = await window.showSaveFilePicker({
        suggestedName: "chat-archive.json",
      });
      const writable = await handle.createWritable();
      await writable.write(blob);
      await writable.close();
    } catch (error) {
      // Fail silently if the user has simply canceled the dialog.
      if (error) {
        return;
      }
      throw error;
    }
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
          onChange={handleFile}
        />
      </div>

      <button
        type="button"
        className="rounded-md bg-white px-3 py-2 text-sm  text-gray-900  ring-1 ring-inset ring-gray-300 hover:bg-gray-50 "
        onClick={(e) => saveFilePicker(e)}
      >
        Export
      </button>
      <button
        type="button"
        className="rounded-md bg-white px-3 py-2 text-sm  text-gray-900  ring-1 ring-inset ring-gray-300 hover:bg-gray-50 "
        onClick={clearBtn}
      >
        Clear
      </button>
    </header>
  );
}

export default Header;
