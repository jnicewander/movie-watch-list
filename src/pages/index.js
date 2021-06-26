import React, { useState } from "react"
import SearchBar from "../components/search-bar"

const IndexPage = () => {
  const [userInput, setUserInput] = useState('')

  return (
    <main>
      <title>Home || Movie Watch List</title>
      <SearchBar
        value={userInput}
        setValue={setUserInput}
      />      
    </main>
  )
}

export default IndexPage
