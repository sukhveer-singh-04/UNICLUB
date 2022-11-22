import React from 'react'
import {IndividualData} from './IndividualData'

export const StudentData = ({excelData}) => {
  return excelData.map((individualExcelData)=> (
    <tr key={individualExcelData.Id}>
        <IndividualData individualExcelData={individualExcelData}/>
    </tr>

  ))
}
