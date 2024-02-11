

import '../CSS/CreateJobOpportunity.css';

import React, { useState } from "react";
import NavBar from "../Component/NavBar";
import Submit from "../Assets/signup.avif";
import axios from "axios";

function CreateJobOpportunity() {
  const [CompanyName, setCompanyName] = useState("");
  const [TitleOfTheJob, setTitleOfTheJob] = useState("");
  const [Description, setDescription] = useState("");
  const [ContactNumber, setContactNumber] = useState("");
  const [NumberOfOpportunity, setNumberOfOpportunity] = useState("");
  const [Salary, setSalary] = useState("");
  const [DateTime, setDateTime] = useState("");
  const [PartTime, setPartTime] = useState("false");
  const [FullTime, setFullTime] = useState("false");
  const [Online, setOnline] = useState("false");
  const [GiveandTake, setGiveandTake] = useState("false");
  const [GoToPlace, setGoToPlace] = useState("false");

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/register/create-job", {
        CompanyName: CompanyName,
        TitleOfTheJob:TitleOfTheJob,
        ContactNumber: ContactNumber,
        NumberOfOpportunity: NumberOfOpportunity,
        Description: Description,
        Salary: Salary,
        DateTime:DateTime
        
      });
      alert("Job Oppp Created Successfully");
    } catch (err) {
      alert(err);
    }
  }
  return (
    <div class="container">
      {/* <NavBar/> */}
      <div class="row justify-content-md-center">
        <div class="col col-lg-5">
          <p class="text-start large-text">
            <b>Create Job Opportunity</b>
          </p>
          <div class="row">
            <div class="col">
              <label for="TitleOfTheJobController" class="form-label">
                Company Name
              </label>
              <input
                type="text"
                class="form-control"
                placeholder=" Company Name"
                id="CompanyName"
                value={CompanyName}
                onChange={(event) => {
                  setCompanyName(event.target.value);
                }}
              />
            </div>
            <div class="col">
              <label for="TitleOfTheJobController" class="form-label">
                Title Of The Job
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Title Of The Job"
                id="TitleOfTheJob"
                value={TitleOfTheJob}
                onChange={(event) => {
                  setTitleOfTheJob(event.target.value);
                }}
              />
            </div>
          </div>
          <div class="mb-3 mt-3">
            <label for="exampleFormControlInput1" class="form-label">
            Description
            </label>
            <input
              type="Description"
              class="form-control"
              id="Description"
              placeholder="Description"
              value={Description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          
          </div>
        
        {/* check box 1*/}
        <p class="text-start">Service Type</p>
          <div class="row">
           
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  // value=""
                  id="PartTime"
                  value = {PartTime}
                  onChange = {(event) => {
                    setPartTime(event.target.value);
                  }}
                />
                <label class="form-check-label" for="PartTime">
              Part Time
                </label>
              
                <input
                  className="form-check-input1"
                  type="checkbox"
                  // value=""
                  id="FullTime"
                  value = {FullTime}
                  onChange = {(event) => {
                    setFullTime(event.target.value);
                  }}
                />
                <label class="form-check-label" for="FullTime">
                Full Time
                </label>
              </div>
        
          </div>
          
          {/* check box 2*/}
        <p class="text-start">job Type</p>
          <div class="row">
           
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  // value=""
                  id="Online"
                  value = {Online}
                  onChange = {(event) => {
                    setOnline(event.target.value);
                  }}
                />
                <label class="form-check-label" for="Online">
                Online
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  // value=""
                  id="GiveandTake"
                  value = {GiveandTake}
                  onChange = {(event) => {
                    setGiveandTake(event.target.value);
                  }}
                />
                <label class="form-check-label" for="GiveandTake">
                Give and Take
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  // value=""
                  id="GoToPlace"
                  value = {GoToPlace}
                  onChange = {(event) => {
                    setGoToPlace(event.target.value);
                  }}
                />
                <label class="form-check-label" for="GoToPlace">
                Go To Place
                </label>
              </div>
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
            Contact Number
            </label>
            <input
              type="Contact Number"
              class="form-control"
              id="ContactNumber"
              placeholder="0XXXXXXXXX"
              value={ContactNumber}
              onChange={(event) => {
                setContactNumber(event.target.value);
              }}
            />
          
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
            Number Of Opportunity
            </label>
            <input
              type="Number Of Opportunity"
              class="form-control"
              id="NumberOfOpportunity"
              placeholder="XX"
              value={NumberOfOpportunity}
              onChange={(event) => {
                setNumberOfOpportunity(event.target.value);
              }}
            />
          
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Salary
            </label>
            <input
              type="Salary"
              class="form-control"
              id="Salary"
              placeholder="XXXXXXXXXX"
              value={Salary}
              onChange={(event) => {
                setSalary(event.target.value);
              }}
            />
          
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
            DateTime
            </label>
            <input
              type="DateTime"
              class="form-control"
              id="DateTime"
              placeholder="YYYY-MM-DD  TT.TT"
              value={DateTime}
              onChange={(event) => {
                setDateTime(event.target.value);
              }}
            />
          
          </div>

          <div class="col-12 d-flex justify-content-center">
            <button
              class="btn btn-primary btn-block"
              type="submit"
              onClick={save}
            >
              Submit
            </button>
          </div>
        </div>
        <div class="col-md-auto">
          <div class="text-center">
            <img src={Submit} class="rounded" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateJobOpportunity;
