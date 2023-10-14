import React, { useState } from "react";

function AgeCalculator() {
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDate = new Date(birthdate);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthDate;
    const ageInYears = Math.floor(
      ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000)
    );
    setAge(ageInYears);
  };

  return (
    <div>
      <h1>Age Calculator</h1>
      <div>
        <label htmlFor="birthdate">Enter your date of birth:</label>
        <input
          type="date"
          id="birthdate"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
      </div>
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && <p>Your age is: {age} years</p>}
    </div>
  );
}

export default AgeCalculator;
