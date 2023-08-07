const API_URL = `https://jsearch.p.rapidapi.com/search?query=${jobSearch}%20${locationSearch}&page=${page}&num_pages=${numPages}`;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "acd083fd78msh0520d5687028325p1c832fjsn70f07468e234",
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  },
};

