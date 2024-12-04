import React, { useEffect, useState } from "react";
import Card from "../components/Shared/Card";
import { getAchievements } from "../services/achievementService";

function Achievements() {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const data = await getAchievements();
        // Ensure the response is an array
        if (Array.isArray(data)) {
          setAchievements(data);
        } else {
          console.error("Unexpected data format:", data);
          setAchievements([]); // Fallback to an empty array
        }
      } catch (error) {
        console.error("Error fetching achievements:", error);
        setAchievements([]); // Fallback to an empty array
      }
    };
    fetchAchievements();
  }, []);

  return (
    <div>
      <h2>Student Achievements</h2>
      <div className="card-grid">
        {achievements.map((achievement) => (
          <Card
            key={achievement._id}
            title={achievement.name}
            description={`${achievement.semester} - ${achievement.sport}`}
            image={achievement.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Achievements;
