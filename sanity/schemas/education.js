const education = {
  name: "education",
  title: "Ausbildung",
  type: "document",
  fields: [
    { name: "area", title: "Area", type: "string" },
    {
      name: "preposition",
      title: "Preposition",
      type: "string",
      options: {
        list: [
          { title: "am", value: "am" },
          { title: "bei", value: "bei" },
        ],
        layout: "dropdown",
      },
      initialValue: "am",
    },
    { name: "institution", title: "Institution", type: "string" },
    { name: "url", title: "URL", type: "url" },
    { name: "startDate", title: "Start date", type: "datetime" },
    { name: "endDate", title: "End date", type: "datetime" },
    { name: "ongoing", title: "Laufend", type: "boolean", initialValue: false },
  ],
};

export default education;
