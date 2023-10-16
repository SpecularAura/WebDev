import React from "react";

const Activity = ({ activity }) => {
  return (
    <>{activity && <p className="activity">{`${activity} is typing...`}</p>}</>
  );
};

export default Activity;
