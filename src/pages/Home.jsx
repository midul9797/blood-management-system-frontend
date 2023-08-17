import { Link } from "react-router-dom"
import "../styles/Home.css"

export default function Home() {
  return (
    <div>
        <div style={{width: "100%", display: 'flex', justifyContent: "flex-end"}}>
<Link to="/">

<button className="btn">LogOut</button>
</Link>
</div>
<div style={{width: "100%", display: 'flex', justifyContent: "center",alignItems: "center", flexDirection: 'column'}}>
        <h1>Welcome to Blood Management System</h1>
        <h2 style={{margin: "20px 0pxe"}}>Informations</h2>
        <div>
        <Link to="/donors">
        <button className="btn" style={{margin: "10px"}}>Donors</button>
        </Link>
        <Link to="/patients">
        <button className="btn" style={{margin: "10px"}}>Patients</button>
        </Link>
        {/* <button className="btn" style={{margin: "10px"}}>Available Blood</button> */}
        <Link to="/records">
        <button className="btn" style={{margin: "10px"}}>All Records</button>
        </Link>
        <Link to="/add-record">
        <button className="btn" style={{margin: "10px"}}>Add Record</button>
        </Link>
        </div>
        <h2 style={{marginTop: "50px"}}>Registration</h2>
        <div>
        <Link to="/donor-registration">

        <button className="btn" style={{margin: "30px"}}>Donor Registration</button>
        </Link>
        <Link to="/patient-registration">

        <button className="btn" style={{margin: "30px"}}>Patient Registration</button>
        </Link>
        </div>
    </div>
</div>
  )
}
