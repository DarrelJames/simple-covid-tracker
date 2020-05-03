import React, { Component } from 'react'

import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api'

import covidImage from './images/image.png'

export default class App extends Component {
  state = {
    data: {},
    country: ''
  }
  async componentDidMount() {
    const fetchedData = await fetchData()

    this.setState({ data: fetchedData })

  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    this.setState({ data: fetchedData, country: country })
  }
  
  render() {

    const { data, country } = this.state

    return (
      <div className={styles.container}>
        <img className={styles.image} alt="Covid-19" src={covidImage} />
        <Cards data={data}/>
        <CountryPicker onChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
      </div>
    )
  }
}
