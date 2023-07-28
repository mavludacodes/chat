const handleFile = (file) => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    if (file) {
      var extension = file.name.split(".").pop().toLowerCase();
      var isSuccess = ["json"].indexOf(extension) > -1;
    }
    if (isSuccess) {
      reader.onloadend = (event) => {
        resolve(JSON.parse(event.target?.result));
      };
      reader.onerror = (event) => reject(event.target?.error);
      reader.readAsText(file);
    } else {
      reject("wrong format");
    }
  });
};

const saveFilePicker = async (list) => {
  const blob = new Blob([JSON.stringify(list)]);
  try {
    const handle = await window.showSaveFilePicker({
      suggestedName: "chat-archive.json",
      types: [
        {
          description: "Json file",
          accept: { "text/plain": [".json"] },
        },
      ],
    });
    const writable = await handle.createWritable();
    await writable.write(blob);
    await writable.close();
  } catch (error) {
    if (error) {
      return;
    }
    throw error;
  }
};

export { handleFile, saveFilePicker };
