import { useState } from 'react'

export const App = () => {
  const [word, setWord] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value)
  }

  const reverseString = (str: string) => {
    return str.split('').reverse().join('')
  }

  const check = () => {
    const reverse = reverseString(word)

    if (word === reverse) {
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
        onChange={handleChange}
      />

      <button onClick={check}>Check</button>
    </>
  )
}
