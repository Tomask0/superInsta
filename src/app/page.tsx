// src/app/home/page.tsx
"use client";

import { useSession } from "next-auth/react";

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <h1>Vitajte, {session.user?.name}!</h1> // Display username if available
      ) : (
        <h1>Vitajte na domovskej stránke!</h1>
      )}
      <p>{session ? "Ste prihlásený." : "Prihláste sa prosím do svojho účtu."}</p>
    </div>
  );
}
