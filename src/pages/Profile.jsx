import React, { useState } from "react";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const [interests, setInterests] = useState("");
  const [skills, setSkills] = useState("");
  const [days, setDays] = useState([]);
  const [hoursPerWeek, setHoursPerWeek] = useState("");
  const [experience, setExperience] = useState("");
  const [demographics, setDemographics] = useState("");
  const [year, setYear] = useState("");

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const handleCheckbox = (day) => {
    setDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uid = auth.currentUser.uid;

    await setDoc(
      doc(db, "students", uid),
      {
        extended_profile: {
          interests: interests.split(",").map((i) => i.trim()),
          skills: skills.split(",").map((s) => s.trim()),
          availability: {
            days,
            hours_per_week: parseInt(hoursPerWeek),
          },
          experience,
          demographics,
          year,
        },
      },
      { merge: true }
    );

    navigate("/dashboard");
  };

  return (
    <div className="container">
      <h1>Complete Your Profile</h1>
      <p className="tagline">
        Tell us more about your background and interests
      </p>

      <form onSubmit={handleSubmit}>
        <label>Interests (comma-separated)</label>
        <input
          type="text"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
          placeholder="e.g. Health, Education, Environment"
        />

        <label>Skills (comma-separated)</label>
        <input
          type="text"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          placeholder="e.g. Public Speaking, Python"
        />

        <label>Availability – Days</label>
        <div className="checkbox-group">
          {daysOfWeek.map((day) => (
            <label key={day}>
              <input
                type="checkbox"
                value={day}
                checked={days.includes(day)}
                onChange={() => handleCheckbox(day)}
              />
              {day}
            </label>
          ))}
        </div>

        <label>Availability – Hours per week</label>
        <input
          type="number"
          value={hoursPerWeek}
          onChange={(e) => setHoursPerWeek(e.target.value)}
          placeholder="e.g. 5"
        />

        <label>Prior Volunteering Experience</label>
        <textarea
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          placeholder="Describe any previous volunteer work"
        />

        <label>Demographic / Background Info</label>
        <input
          type="text"
          value={demographics}
          onChange={(e) => setDemographics(e.target.value)}
          placeholder="e.g. First-gen student, speaks Spanish"
        />

        <label>Year in School</label>
        <select value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="">Select your year</option>
          <option>Freshman</option>
          <option>Sophomore</option>
          <option>Junior</option>
          <option>Senior</option>
          <option>Graduate</option>
        </select>

        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
}
