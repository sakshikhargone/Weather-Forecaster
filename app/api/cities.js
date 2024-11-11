export const getLocations = () => {
  const cities = [
    {
      id: 1,
      text: "Khargone",
      url: "khargone",
    },

    {
      id: 2,
      text: "Khandwa",
      url: "khandwa",
    },

    {
      id: 3,
      text: "Indore",
      url: "indore",
    },

    {
      id: 4,
      text: "Mumbai",
      url: "mum",
    },
    {
      id: 5,
      text: "Delhi",
      url: "del",
    },

    {
      id: 6,
      text: "Goa",
      url: "goa",
    },
  ];
  return cities;
};

export const getLocationById = (id) => {
  const cities = [
    {
      id: 1,
      text: "Khargone",
      url: "kgn",
    },

    {
      id: 2,
      text: "Khandwa",
      url: "kha",
    },

    {
      id: 3,
      text: "Indore",
      url: "indore",
    },

    {
      id: 4,
      text: "Mumbai",
      url: "mum",
    },
    {
      id: 5,
      text: "Delhi",
      url: "del",
    },

    {
      id: 6,
      text: "Goa",
      url: "goa",
    },
  ];
  const matchedCity = cities.find((c) => c.id === id);
  return matchedCity;
};
