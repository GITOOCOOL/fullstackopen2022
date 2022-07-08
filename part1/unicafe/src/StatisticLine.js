import React from 'react'
import './style.css'


const StatisticLine = ({text,value}) => {
  return (
    <table>
        <tbody>
            <tr>
                <td className='text'>{text}</td>
                <td className='value'>{value}</td>
            </tr>
        </tbody>
    </table>
  )
}

export default StatisticLine
