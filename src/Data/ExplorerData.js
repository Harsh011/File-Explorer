const ExploerData = {
  id: 1,
  name: "root",
  isFolder: true,
  items: [
    {
      id: 2,
      name: "public",
      isFolder: true,
      items: [
        {
          id: 5,
          name: "public_Nested_file_1",
          isFolder: true,
          items: [
            { id: 7, name: "hello.html", isFolder: false, items: [] },
            { id: 8, name: "index.html", isFolder: false, items: [] },
          ],
        },
        {
          id: 6,
          name: "public_Nested_file_2",
          isFolder: true,
          items: [
            {
              id: 9,
              name: "components",
              isFolder: true,
              items: [
                { id: 12, name: "ExploerData.js", isFolder: false, items: [] },
              ],
            },
            { id: 10, name: "app.js", isFolder: false, items: [] },
            { id: 11, name: "style.css", isFolder: false, items: [] },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "src",
      isFolder: true,
      items: [
        {
          id: 9,
          name: "components",
          isFolder: true,
          items: [
            { id: 12, name: "ExploerData.js", isFolder: false, items: [] },
          ],
        },
        { id: 10, name: "app.js", isFolder: false, items: [] },
        { id: 11, name: "style.css", isFolder: false, items: [] },
      ],
    },
    {
      id: 4,
      name: "package.json",
      isFolder: false,
      items: [],
    },
  ],
};

export default ExploerData;
