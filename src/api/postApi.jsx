import axios from "axios"

const api=axios.create({
    baseURL:"https://restcountries.com/v3.1"
})

export const getCountryData = ()=>{
    return api.get("/all?fields=name,region,capital,flags")
}

export const getCountryByName = (name) => {
  return api.get(`/name/${name}?fullText=true`);
};