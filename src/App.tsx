import { useState } from 'react'

export const App = () => {
  const [word, setWord] = useState('')

  const reverseString = (str: string) => {
    return str.split('').reverse().join('')
  }

  const check = () => {
    const value = word
    const reverse = reverseString(value)

    if (value === reverse) {
      alert('P A L I N D R O M E')
    } else {
      alert('Not today!')
    }

    setWord('')
  }

  return (
    <>
      <h1>Palindrome Checker</h1>

      <input
        type='text'
        placeholder='Type something'
        value={word}
        onChange={(event) => setWord(event.target.value)}
      />

      <button onClick={check}>Check</button>
    </>
  )
}
