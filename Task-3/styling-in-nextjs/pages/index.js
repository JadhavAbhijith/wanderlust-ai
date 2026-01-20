import StyledButton from "../components/StyledButton";

export default function Home() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Task 3: Styling in Next.js</h1>
      <p style={{margin: "15px"}}>This button is styled using CSS Modules.</p>
      <StyledButton />
    </div>
  );
}
