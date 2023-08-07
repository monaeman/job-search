export const getJobs = async (jobSearch, locationSearch, page = 1, numPages = 1) => {
  try {


const API_URL = `https://jsearch.p.rapidapi.com/search?query=${jobSearch}%20${locationSearch}&page=${page}&num_pages=${numPages}`;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "acd083fd78msh0520d5687028325p1c832fjsn70f07468e234",
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  },
};

const response = await fetch(API_URL, options);
const result = await response.json();



return result;6
} catch (error) {
console.error("Error fetching job data:", error);
return { status: "ERROR", data:[] };
}
};

