import React from 'react'
import BuyCarSearchFilter from '../BuyCarSearchFilter'

const FilterSection = ({setCarListing,setLoading}) => {
  return (
    <BuyCarSearchFilter setCarListing={setCarListing} setLoading={setLoading} />
  )
}

export default FilterSection