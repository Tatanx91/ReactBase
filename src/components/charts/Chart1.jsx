import React from 'react'
import { useLocation } from 'react-router-dom'
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

export const Chart1 = props => {
  console.log('HOLAAAAAAAAAAA')
  console.log(props)
  const location = useLocation()
  console.log(location)


  return (
    <>
      <p>HELLOOO</p>
      <BarChart width={730} height={250} data={location.state.values}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </>
  )
}
