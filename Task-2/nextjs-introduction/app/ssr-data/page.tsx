import React from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getData(): Promise<Post> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function SSRDataPage() {
  const data = await getData();

  return (
    <div>
      <h2>App Router – Server Side Data</h2>
      <p><strong>Title:</strong> {data.title}</p>
      <p><strong>Body:</strong> {data.body}</p>
    </div>
  );
}
