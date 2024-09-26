"use client";

import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">
          Welcome to Next.js Server Component!
        </h1>
        <div>
          <a href="/api/auth/signin">Sign in</a>
          <span> | </span>
          <a href="/api/auth/signout">Sign out</a>
        </div>
        <pre>SESSION: {JSON.stringify(session, null, 2)}</pre>
        <pre>accessToken: {JSON.stringify(session?.accessToken, null, 2)}</pre>
      </main>
    </div>
  );
}
