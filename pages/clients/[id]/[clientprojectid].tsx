import React from "react";
import { useRouter } from "next/router";

export default function SelectedClientprojectPage() {
  const router = useRouter();

  console.log(router.query);
  return (
    <div>
      <h1>The Project page for a Specific Project for a Selected Client</h1>
    </div>
  );
}
