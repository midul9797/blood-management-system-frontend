import { Input, Select, Table, Tag } from "antd";
import { useEffect, useState } from "react";

const { Column } = Table;

export default function Donors() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/donors")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);
  const handleSearch = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/api/v1/donors?searchTerm=${search}`)
      .then((res) => res.json())
      .then((data) => setData(data.data));
  };
  const handleSelect = (value) => {
    if (value === "O+" || value === "B+" || value === "A+" || value === "AB+") {
      console.log(value.slice(0, -1));
      fetch(
        `http://localhost:3000/api/v1/donors?searchTerm=${value.slice(
          0,
          -1
        )}%2B`
      )
        .then((res) => res.json())
        .then((data) => setData(data.data));
    } else if (value === "All") {
      fetch(`http://localhost:3000/api/v1/donors`)
        .then((res) => res.json())
        .then((data) => setData(data.data));
    } else {
      fetch(
        `http://localhost:3000/api/v1/donors?searchTerm=${value.slice(
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
        <h2>Donors Information</h2>
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
        <Column title="Name" dataIndex="name" key="name" />

        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column title="Phone No." dataIndex="phone" key="phone" />
        <Column title="Blood Group" dataIndex="bloodGroup" key="bloodGroup" />
        <Column
          title="Health Status"
          dataIndex="healthStatus"
          key="healthStatus"
          render={(tag) => (
            <Tag color={tag === "Healthy" ? "blue" : "red"}>{tag}</Tag>
          )}
        />
      </Table>
    </>
  );
}
