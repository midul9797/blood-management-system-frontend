import { Input, Select, Table } from "antd";
import ColumnGroup from "antd/es/table/ColumnGroup";
import { useEffect, useState } from "react";

const { Column } = Table;

export default function Records() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/records")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);
  const handleSearch = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/api/v1/records?searchTerm=${search}`)
      .then((res) => res.json())
      .then((data) => setData(data.data));
  };
  const handleSelect = (value) => {
    if (value === "O+" || value === "B+" || value === "A+" || value === "AB+") {
      console.log(value.slice(0, -1));
      fetch(
        `http://localhost:3000/api/v1/records?searchTerm=${value.slice(
          0,
          -1
        )}%2B`
      )
        .then((res) => res.json())
        .then((data) => setData(data.data));
    } else if (value === "All") {
      fetch(`http://localhost:3000/api/v1/records`)
        .then((res) => res.json())
        .then((data) => setData(data.data));
    } else {
      fetch(
        `http://localhost:3000/api/v1/records?searchTerm=${value.slice(
          0,
          -1
        )}%2D`
      )
        .then((res) => res.json())
        .then((data) => setData(data.data));
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <h2>Records</h2>
        <div>
          <Input
            placeholder="Enter Phone NO."
            style={{ width: "40vw", height: "35px" }}
            type="text"
            onBlur={(e) => setSearch(e.target.value)}
          />
          <button
            className="btn"
            style={{ fontSize: "14px", padding: "7px 25px" }}
            onClick={handleSearch}
          >
            Search
          </button>
          <Select
            defaultValue="All Blood"
            style={{
              width: 120,
            }}
            onChange={(value) => handleSelect(value)}
            options={[
              { value: "All", label: "All" },
              {
                value: "A+",
                label: "A+",
              },
              {
                value: "A-",
                label: "A-",
              },
              {
                value: "O+",
                label: "O+",
              },
              {
                value: "O-",
                label: "O-",
              },
              {
                value: "B+",
                label: "B+",
              },
              {
                value: "B-",
                label: "B-",
              },
              {
                value: "AB+",
                label: "AB+",
              },
              {
                value: "AB-",
                label: "AB-",
              },
            ]}
          />
        </div>
      </div>
      <Table dataSource={data} style={{ marginTop: "30px" }}>
        <ColumnGroup title="Donor's Details">
          <Column
            title="Name"
            dataIndex="donor"
            key="dname"
            render={(d) => <p>{d.name}</p>}
          />

          <Column
            title="Phone No."
            dataIndex="donor"
            key="dphone"
            render={(d) => <p>{d.phone}</p>}
          />
        </ColumnGroup>
        <ColumnGroup title="Patient's Details">
          <Column
            title="Name"
            dataIndex="patient"
            key="pname"
            render={(p) => <p>{p.name}</p>}
          />

          <Column
            title="Phone No."
            dataIndex="patient"
            key="pphone"
            render={(p) => <p>{p.phone}</p>}
          />
        </ColumnGroup>
        <Column
          title="Date"
          dataIndex="date"
          key="date"
          render={(p) => <p>{p.slice(0, 10)}</p>}
        />

        <Column
          title="Blood Group"
          dataIndex="donor"
          key="bloodGroup"
          render={(p) => <p>{p.bloodGroup}</p>}
        />
      </Table>
    </>
  );
}
