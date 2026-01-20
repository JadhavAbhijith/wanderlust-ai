import TravelDisplay from "../components/TravelDisplay";

export default function Home() {
  return (
    <main style={styles.container}>
      <h1>Welcome to Travel Planner</h1>

      <TravelDisplay destination="Maldives, Europe" />
    </main>
  );
}

const styles = {
  container: {
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
};
