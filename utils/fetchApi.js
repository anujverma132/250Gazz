import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'a3475eee8cmsh7fa29906553e866p1484d0jsna201f6e43ce1' ,
    },
  });
    
  return data;
}