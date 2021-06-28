import React from "react"

const SearchBar = ({ value, onSubmit, onChange }) => { 

  return (
    <form onSubmit={onSubmit}>
      <label>
        Search for a movie...
        <input
          type="text"
          name="query"
          value={value}
          onChange={onChange}
        />
      </label>
      <input type="submit" value="Go!" />
    </form>
  )
}

export default SearchBar