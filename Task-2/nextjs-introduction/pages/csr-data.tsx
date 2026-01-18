import React from "react";
import { useEffect, useState } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function CSRDataPage() {
  const [data, setData] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/2")
      .then((res) => res.json())
      .then((json: Post) => {
        setData(json);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading client-side data...</p>;
  }

  if (!data) {
    return <p>No data found</p>;
  }

  return (
    <div>
      <h2>Pages Router – Client Side Data</h2>
      <p><strong>Title:</strong> {data.title}</p>
      <p><strong>Body:</strong> {data.body}</p>
    </div>
  );
}
