import { useEffect, useState } from 'react'
function App() {
  const [state, setState] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos').then((result) => {
      result.json().then((res) => {
        setState(res)
      })
    })
  }, [])
  return (
    <>
      <h1>Calling an API</h1>
      <table border="1">
        <tr>
          <td>id </td>
          <td>Title</td>
          <td>User-id</td>
        </tr>
        {state.map((e) => {
          return (
            <>
              <tr>
                <td>{e.id}</td>
                <td>{e.title}</td>
                <td>{e.userId}</td>
              </tr>
            </>
          )
        })}
      </table>
    </>
  )
}

export default App
