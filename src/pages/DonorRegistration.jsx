import { useState } from "react";
import "../styles/DonorRegistration.css";

export default function DonorRegistration() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [age, setAge] = useState(0);
  const [healthStatus, setHealthStatus] = useState("");
  const handleSubmit = () => {
    fetch("http://localhost:3000/api/v1/donors/create-donor", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        address: address,
        phone: phone,
        age: +age,
        bloodGroup: bloodGroup,
        healthStatus: healthStatus,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.success === "true") {
          alert("Donor Registration Successful");
          setAddress("");
          setAge("");
          setBloodGroup("");
          setHealthStatus("");
          setName("");
          setPhone("");
        } else alert("Phone number exists");
      });
  };

  return (
    <>
      <div
        style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
      ></div>
      <div className="donor_body">
        <h2 className="donor_heading">Donor Registration</h2>
        <div className="donor_input_box">
          <div>
            <span className="donor_name">Name:</span>
            <input
              className="donor_name_input"
              type="text"
              onBlur={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <span className="donor_name">Age:</span>
            <input
              className="donor_name_input"
              type="number"
              onBlur={(e) => setAge(e.target.value)}
            />
          </div>
          <div>
            <span className="donor_name">Address:</span>
            <input
              className="donor_name_input"
              type="text"
              onBlur={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <span className="donor_name">Phone NO. : </span>
            <input
              className="donor_name_input"
              type="text"
              onBlur={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <span className="donor_name">Blood Group :</span>
            <input
              className="donor_name_input"
              type="text"
              onBlur={(e) => setBloodGroup(e.target.value)}
            />
          </div>
          <div>
            <span className="donor_name">Health Status :</span>
            <input
              className="donor_name_input"
              type="text"
              onBlur={(e) => setHealthStatus(e.target.value)}
            />
          </div>
        </div>
        <button className="register_btn" onClick={handleSubmit}>
          Register
        </button>
      </div>
    </>
  );
}
