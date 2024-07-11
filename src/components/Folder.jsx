import React, { useState } from "react";

export const Folder = ({ handleInsertNode, explorer }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  console.log(explorer);

  const handleclick = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const AddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      //Add logic Add Folder or file
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({
        ...showInput,
        visible: false,
      });
    }
  };
  if (explorer.isFolder) {
    return (
      <div>
        <div className="folder" onClick={(e) => setExpand(!expand)}>
          <span>📁 {explorer.name}</span>

          <div>
            <button onClick={(e) => handleclick(e, true)}>Folder +</button>
            <button onClick={(e) => handleclick(e, false)}>file +</button>
          </div>
        </div>
        <div
          style={{ display: expand ? "block" : "none", paddingLeft: "25px" }}
        >
          {showInput.visible && (
            <div>
              <span>{showInput.isFolder ? "📁" : "📃"}</span>
              <input
                onKeyDown={AddFolder}
                type="text"
                autoFocus
                onBlur={(e) => setShowInput({ ...showInput, visible: false })}
              />
            </div>
          )}
          {explorer.items.map((exp, indx) => {
            return (
              <Folder
                handleInsertNode={handleInsertNode}
                explorer={exp}
                key={indx}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📃 {explorer.name}</span>;
  }
};
