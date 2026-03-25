const work = {
  name: "work",
  title: "Berufserfahrung",
  type: "document",
  fields: [
    { name: "position", title: "Position", type: "string" },
    {
      name: "preposition",
      title: "Preposition",
      type: "string",
      options: {
        list: [
          { title: "bei", value: "bei" },
          { title: "beim", value: "beim" },
        ],
        layout: "dropdown",
      },
      initialValue: "bei",
    },
    { name: "name", title: "Firm", type: "string" },
    { name: "url", title: "URL", type: "url" },
    { name: "startDate", title: "Start date", type: "datetime" },
    { name: "endDate", title: "End date", type: "datetime" },
    { name: "ongoing", title: "Laufend", type: "boolean", initialValue: false },
  ],
};

export default work;
