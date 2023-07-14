import React from 'react'
import { useNavigate  } from 'react-router-dom'

export const Simulacion = props => {

  const navigate = useNavigate()

  const buttonClick = (s) => {
    navigate("/Charts", {state:{
      values:[{
        name: 'PERRROOOO FUNCIONOOO',
        value: 500
      }
    ]}
  })
  }
  return (
    <>
      <p>Simulacion</p>
      <table className='strippedTable'>
        <thead>
          <tr>
            <th>uno</th>
            <th>dos</th>
            <th>tres</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>

      <button onClick={buttonClick} >Simular</button>
    </>
  )
}
