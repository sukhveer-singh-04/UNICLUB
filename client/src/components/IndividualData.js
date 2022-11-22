import React from 'react'

export const IndividualData = ({individualExcelData}) => {
  return (
    <>
      <th>{individualExcelData.Name}</th>
      <th>{individualExcelData.Email}</th>
      <th>{individualExcelData.Semester}</th>
    </>
  )
}
