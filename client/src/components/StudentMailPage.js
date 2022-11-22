import React from "react";
import { useState } from "react";
import { Text, Link } from "@nextui-org/react";
import "./StudentMailPage.css";
import {StudentData} from './StudentData'
import * as XLSX from 'xlsx';

const StudentMailPage = () => {

    const [excelFile, setExcelFile] = useState(null);
    const [excelFileError, setExcelFileError] = useState(null);

    const [excelData, setExcelData] = useState(null);

    const fileType = [
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "text/csv",
    ];
    const handleFile = (e) => {
      let selectedFile = e.target.files[0];
      if (selectedFile) {
      //   console.log(selectedFile.type);
          if(selectedFile&&fileType.includes(selectedFile.type)){
              let reader = new FileReader();
              reader.readAsArrayBuffer(selectedFile);
              reader.onload=(e)=>{
                setExcelFileError(null);
                setExcelFile(e.target.result);
              }
            }else{
                setExcelFile(null);
                setExcelFileError('*Please select an excel file');
            }
      } else {
        console.log("Please select your file");
      }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(excelFile!==null){
            const workbook = XLSX.read(excelFile,{type: 'buffer'});
            const worksheetName = workbook.SheetNames[0];
            const worksheet=workbook.Sheets[worksheetName];
            const data = XLSX.utils.sheet_to_json(worksheet);
            setExcelData(data);
        }
        else{
            setExcelData(null);
        }
    }

    return (
      <div className="mail__container">
        <div className="mail__header">
        <Link href="/adminpanel">
          <Text css={{ color: "#fff" }} size={15} weight="bold">
            Click Here to go to Admin Page
          </Text>
        </Link>
        </div>
        <div className="student-form">
          <form
            className="form-group"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <label>
              <h3 className="h3">UPLOAD EXCEL FILE</h3>
            </label>
            <br></br>
            <input
              type="file"
              className="form-control"
              onChange={handleFile}
              required
            ></input>

            {excelFileError && (
              <div className="text-danger" style={{ marginTop: 5 + "px" }}>
                {excelFileError}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginTop: 5 + "px" }}
            >
              Submit
            </button>
          </form>
        </div>
        <br></br>
        <hr></hr>

        <div className="viewer">
          <h3 className="h3">VIEW EXCEL FILE</h3>
          {excelData === null && <>No File Selected</>}
          {excelData !== null && (
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Semester</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <StudentData excelData={excelData} /> */}
                  <StudentData excelData={excelData} />
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    );
};

export default StudentMailPage;
