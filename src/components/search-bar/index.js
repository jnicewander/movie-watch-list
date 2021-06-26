import React from "react"

const SearchBar = ({ value, setValue }) => {

  const handleChange = event => {
    setValue(event.target.value)
  }

  return (
    <label>
      Search for a movie...
      <input
        type="text"
        name="search"
        value={value}
        onChange={e => handleChange(e)}
      />
    </label>    
  )
}

export default SearchBar