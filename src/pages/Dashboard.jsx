import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [studentProfile, setStudentProfile] = useState(null);
  const [npoMatch, setNpoMatch] = useState(null);

  // Mock NPO database
  const mockNPOs = [
    {
      name: "Green Earth Alliance",
      mission: "Environmental conservation through education and outreach",
      needs: ["Education", "Environment"],
      skillsPreferred: ["Public Speaking", "Event Planning"],
      daysPreferred: ["Saturday", "Sunday"],
    },
    {
      name: "Bright Minds Tutoring",
      mission: "Supporting underprivileged youth in academic excellence",
      needs: ["Education", "Youth Services"],
      skillsPreferred: ["Tutoring", "Mentoring"],
      daysPreferred: ["Monday", "Wednesday"],
    },
    {
      name: "Healthy Horizons",
      mission: "Promoting public health initiatives in local communities",
      needs: ["Health", "Community Outreach"],
      skillsPreferred: ["Health Education", "Community Engagement"],
      daysPreferred: ["Friday", "Saturday"],
    },
  ];

  useEffect(() => {
    const fetchProfile = async () => {
      const uid = auth.currentUser?.uid;
      if (!uid) {
        navigate("/login");
        return;
      }

      const docRef = doc(db, "students", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const profile = docSnap.data().extended_profile;
        setStudentProfile(profile);
        matchNPO(profile);
      } else {
        navigate("/profile");
      }
    };

    fetchProfile();
  }, [navigate]);

  const matchNPO = (profile) => {
    // Simple matching logic: first NPO that shares an interest or skill
    const match = mockNPOs.find((npo) => {
      const sharedInterests = npo.needs.some((need) =>
        profile.interests.includes(need)
      );
      const sharedSkills = npo.skillsPreferred.some((skill) =>
        profile.skills.includes(skill)
      );
      return sharedInterests || sharedSkills;
    });

    setNpoMatch(match || null);
  };

  if (!studentProfile) {
    return (
      <div className="container">
        <p>Loading your dashboard...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Welcome to Your Dashboard</h1>
      <p className="tagline">Here's a nonprofit you might like!</p>

      {npoMatch ? (
        <div style={{ marginTop: "30px", textAlign: "left" }}>
          <h2>{npoMatch.name}</h2>
          <p>
            <strong>Mission:</strong> {npoMatch.mission}
          </p>
          <p>
            <strong>Focus Areas:</strong> {npoMatch.needs.join(", ")}
          </p>
          <p>
            <strong>Preferred Skills:</strong>{" "}
            {npoMatch.skillsPreferred.join(", ")}
          </p>
          <p>
            <strong>Preferred Days:</strong> {npoMatch.daysPreferred.join(", ")}
          </p>
        </div>
      ) : (
        <p>No suitable nonprofit found yet based on your profile.</p>
      )}

      <button
        style={{ marginTop: "30px" }}
        onClick={() => navigate("/profile")}
      >
        Update Profile
      </button>
    </div>
  );
}
