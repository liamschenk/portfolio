const basics = {
  name: "basics",
  title: "Über",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "summary", title: "Summary", type: "text" },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          {
            name: "Available",
            title: "Verfügbar für Anfragen",
            value: "available",
          },
          { name: "Partial", title: "Teilweise verfügbar", value: "partial" },
          {
            name: "Unavailable",
            title: "Nicht verfügbar",
            value: "unavailable",
          },
        ],
        layout: "dropdown",
      },
    },
  ],
};

export default basics;
