import React from 'react'
import { useLocation } from 'react-router-dom'

const SearchPage = () => {
    const location = useLocation()
    console.log(location, "asas")
  return (
    <div>
       Searche Page
    </div>
  )
}

export default SearchPage
