import { useState } from "react";

export default function DisplayName() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(name.trim() === "" || lastName.trim() === "") {
        setFullName("");
        return;
    }

    setFullName(`${name} ${lastName}`);
  };

  return (
    <div style={{ margin: "10px" }}>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
        {
            fullName &&    
            <div style={{ marginTop: "20px" }}>
                Full Name: {fullName}
            </div>
        }
    </div>
  );
}
