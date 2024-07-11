import React from "react";

const useTraversetree = () => {
  function insertNode(tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: [],
      });
      return tree;
    }

    let latestNode = [];
    tree.items.map((obj) => {
      return (latestNode = insertNode(obj, folderId, item, isFolder));
    });
    return { ...tree, item: latestNode };
  }
  return { insertNode };
};

export default useTraversetree;
