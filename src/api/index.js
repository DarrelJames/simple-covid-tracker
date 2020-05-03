import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {
  let changeablUrl = url

  if (country) {
    changeablUrl = `${url}/countries/${country}`
  }

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate} } = await axios.get(changeablUrl)

    return { confirmed, recovered, deaths, lastUpdate }

  } catch (e) {
    console.log(e);

  }
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`)

    const modifiedData = data.map( dailyData => {

       return {
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }})

   return modifiedData
  } catch (e) {

  }
}

export const fetchCountries = async () => {
  try {
    const { data } = await axios.get(`${url}/countries`)

    return data.countries;
  } catch (e) {

  }
}
