// src/pages/prihlasenie.tsx
"use client";

import { signIn } from "next-auth/react";

export default function Prihlasenie() {
  return (
    <div>
      <h1>Prihlásenie</h1>
      <p>Prihláste sa prosím do svojho účtu.</p>
      <button onClick={() => signIn("google")} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Sign in with Google
      </button>
    </div>
  );
}
