import { useEffect, useState } from "react";

export default function ApiDataPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/data")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Next.js → Node.js API Integration</h1>

      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data from backend...</p>
      )}
    </div>
  );
}
