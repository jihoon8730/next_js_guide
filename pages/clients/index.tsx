import React from "react";
import Link from "next/link";

export default function ClientPage() {
  const clients = [
    { id: "max", name: "Maximilain" },
    { id: "manu", name: "Manuel" },
  ];
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((clients) => (
          <li key={clients.id}>
            <Link href={`/clients/${clients.id}}`}>{clients.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
