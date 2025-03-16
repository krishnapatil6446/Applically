import React from "react";

interface StatProps {
  percentage: string;
  description: string;
}

const StatBlock: React.FC<StatProps> = ({ percentage, description }) => {
  return (
    <div style={styles.statBlock}>
      <div style={styles.arrow}>↑</div>
      <h1 style={styles.percentage}>{percentage}</h1>
      <p style={styles.description}>{description}</p>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  statBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px",
    textAlign: "center",
    color: "#a64edd", // Purple color for text
  },
  arrow: {
    fontSize: "2rem",
    color: "#a64edd", // Arrow color matching percentage
  },
  percentage: {
    fontSize: "2rem",
    margin: "0",
  },
  description: {
    fontSize: "1rem",
    marginTop: "5px",
    color: "#666", // Slightly muted color for description
  },
};

const StatsContainer: React.FC = () => {
  const stats = [
    { percentage: "38%", description: "more interviews" },
    { percentage: "23%", description: "more likely to get a job offer" },
    { percentage: "38%", description: "more interviews" },
    { percentage: "23%", description: "more likely to get a job offer" },
  ];

  return (
    <div style={containerStyles}>
      {stats.map((stat, index) => (
        <StatBlock
          key={index}
          percentage={stat.percentage}
          description={stat.description}
        />
      ))}
    </div>
  );
};

const containerStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexWrap: "wrap", // Ensures wrapping on smaller screens
  padding: "20px",
};

export default StatsContainer;
