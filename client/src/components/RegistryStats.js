import React from 'react'
import "./styles/RegistryStats.css"

function RegistryStats() {
  return (
    <div className="rStats-container">
        <table className="stats">
            <tr>
                <td width="150">Age</td>
                <td>17</td>
            </tr>
            <tr>
                <td>Biological Sex</td>
                <td>Female</td>
            </tr>
            <tr>
                <td>Height</td>
                <td>6"1'</td>
            </tr>
            <tr>
                <td>Weight</td>
                <td>185lbs</td>
            </tr>
        </table>      
    </div>
  )
}

export default RegistryStats;
