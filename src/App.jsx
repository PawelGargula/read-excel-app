import { useState } from 'react'
import './App.css'
import * as XLSX from "xlsx"

function App() {

  const handleFileUpload = (e) => {
    const reader = new FileReader()
    reader.readAsBinaryString(e.target.files[0])
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet, { header: 1});
      console.log(parsedData)
    }
  }

  return (
    <>
      <h1>Read xlsx</h1>
      <input type="file" accept='.xlsx, .xls' name="file" id="file" onChange={handleFileUpload}/>
    </>
  )
}

export default App
