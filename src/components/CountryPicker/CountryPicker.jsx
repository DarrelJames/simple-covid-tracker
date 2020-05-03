import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import { fetchCountries } from '../../api'

import styles from './CountryPicker.module.css'

export default function CountryPicker({ onChange }) {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      const countriesData = await fetchCountries()

      setCountries(countriesData)
    }

    fetchAPI()
  }, [])

  return (
    <FormControl className={styles.FormControl}>
      <NativeSelect defaultValue="" onChange={e => onChange(e.target.value)}>
        <option value=""> Global</option>
        {countries.map((country, i) => (<option key={i} value={country.name}>{country.name}</option>))}
      </NativeSelect>
    </FormControl>
  )
}
