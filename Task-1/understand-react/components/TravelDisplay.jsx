import { useState, useEffect } from "react";

const TravelDisplay = ({ destination }) => {
  
  const [visits, setVisits] = useState(0);
  
  const [message, setMessage] = useState("You have not visited yet.");

  
  useEffect(() => {
    if (visits === 0) {
      setMessage("You have not visited yet.");
    } 
    else if (visits === 1) {
      setMessage("You have visited once.");
    } 
    else {
      setMessage(`You have visited ${visits} times.`);
    }
  }, [visits]);

  return (
    <div style={styles.card}>
     
      <h2>Destination: {destination}</h2>
      
      <p>Visits Count: {visits}</p>

      <p>{message}</p>

      <button onClick={() => setVisits(visits + 1)}>Visit Again</button>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "400px",
    textAlign: "center"
  }
};

export default TravelDisplay;
