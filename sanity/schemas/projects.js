const projects = {
  name: "projects",
  title: "Projekte",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "description", title: "Description", type: "text" },
    { name: "date", title: "Date", type: "date" },
    {
      name: "media",
      title: "Media",
      type: "array",
      of: [{ type: "image", options: { hotspot: false } }],
    },
  ],
};

export default projects;
