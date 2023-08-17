import { useState } from "react";

export default function AddRecord() {
  const [donorSearch, setDonorSearch] = useState("");
  const [donorData, setDonorData] = useState({});
  const [patientSearch, setPatientSearch] = useState("");
  const [patientData, setPatientData] = useState({});
  const handleDonorSearch = () => {
    fetch(`http://localhost:3000/api/v1/donors/${donorSearch}`)
      .then((res) => res.json())
      .then((data) => setDonorData(data.data));
  };
  const handlePatientSearch = () => {
    fetch(`http://localhost:3000/api/v1/patients/${patientSearch}`)
      .then((res) => res.json())
      .then((data) => setPatientData(data.data));
  };
  const handleAddRecord = () => {
    fetch("http://localhost:3000/api/v1/records/create-record", {
      method: "POST",
      body: JSON.stringify({
        d_phone: donorData.phone,
        p_phone: patientData.phone,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(
          JSON.stringify({
            d_phone: donorData.phone,
            p_phone: patientData.phone,
          })
        );
        if (data?.success === true) {
          alert("Record added successfully");
          setDonorData({});
          setPatientData({});
          setDonorSearch("");
          setPatientSearch("");
        } else alert("Record exists");
      });
  };
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: 0, paddingTop: "50px" }}>
        Add New Record
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "50px",
        }}
      >
        <div
          style={{
            backgroundColor: "#65B5D8",
            width: "40vw",
            height: "60vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <h2 style={{ margin: "20px" }}>Donor Details</h2>
          <div>
            <span className="donor_name">Phone No.:</span>
            <input
              className="donor_name_input"
              type="text"
              placeholder="Enter Phone No."
              onBlur={(e) => setDonorSearch(e.target.value)}
            />
          </div>
          <button
            className="btn"
            style={{ fontSize: "14px", padding: "10px 3vw", margin: 0 }}
            onClick={handleDonorSearch}
          >
            Search
          </button>
          <div>
            {donorData ? (
              <div style={{ color: "black" }}>
                <p>Donor Name: {donorData.name}</p>
                <p>Donor Blood Group: {donorData.bloodGroup}</p>
                <p>Donor Health Status: {donorData.healthStatus}</p>
              </div>
            ) : (
              <p style={{ color: "red" }}>NOT FOUND</p>
            )}
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#65B5D8",
            width: "40vw",
            height: "60vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <h2 style={{ margin: "20px" }}>Patient Details</h2>
          <div>
            <span className="donor_name">Phone No.:</span>
            <input
              className="donor_name_input"
              type="text"
              placeholder="Enter Phone No."
              onBlur={(e) => setPatientSearch(e.target.value)}
            />
          </div>
          <button
            className="btn"
            style={{ fontSize: "14px", padding: "10px 3vw", margin: 0 }}
            onClick={handlePatientSearch}
          >
            Search
          </button>
          <div>
            {patientData ? (
              <div style={{ color: "black" }}>
                <p>Patient Name: {patientData.name}</p>
                <p>Patient Blood Group: {patientData.bloodGroup}</p>
                <p>Patient Health Status: {patientData.healthStatus}</p>
              </div>
            ) : (
              <p style={{ color: "red" }}>NOT FOUND</p>
            )}
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {patientData && donorData && (
          <button className="btn" onClick={handleAddRecord}>
            Add Record
          </button>
        )}
      </div>
    </div>
  );
}
