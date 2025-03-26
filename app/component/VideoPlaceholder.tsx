import React from "react";

interface StatProps {
  percentage: string;
  description: string;
}

const StatBlock: React.FC<StatProps> = ({ percentage, description }) => {
  const blockStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  };

  const arrowStyle: React.CSSProperties = {
    fontSize: "1.5rem",
    color: "#a64edd",
  };

  const percentageStyle: React.CSSProperties = {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#a64edd",
    margin: 0,
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: "1rem",
    color: "#666",
    margin: 0,
  };

  return (
    <div style={blockStyle}>
      <span style={arrowStyle}>↑</span>
      <h2 style={percentageStyle}>{percentage}</h2>
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
};

const StatsContainer: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: "20px",
    gap: "20px",
  };

  const statsData: StatProps[] = [
    { percentage: "38%", description: "more interviews" },
    { percentage: "23%", description: "more likely to get a job offer" },
  ];

  const duplicatedStats: StatProps[] = [...statsData, ...statsData];

  return (
    <div style={containerStyle}>
      {duplicatedStats.map((stat, index) => (
        <StatBlock key={index} percentage={stat.percentage} description={stat.description} />
      ))}
    </div>
  );
};

export default StatsContainer;
