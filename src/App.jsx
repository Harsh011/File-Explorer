import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Folder } from "./components/Folder";
import ExploerData from "./Data/ExplorerData";
import useTraversetree from "./hooks/use-Traverse-tree";

function App() {
  const [ExplorerData, setExplorereData] = useState(ExploerData);

  const { insertNode } = useTraversetree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalNode = insertNode(ExplorerData, folderId, item, isFolder);
    setExplorereData(finalNode);
  };
  return (
    <div>
      <Folder handleInsertNode={handleInsertNode} explorer={ExplorerData} />
    </div>
  );
}

export default App;
