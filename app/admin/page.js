"use client";

import { useEffect } from "react";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import { ADMIN_URL } from "@/lib/config";

/*
 * The admin panel is now its own site (the "admin" folder / its own Vercel
 * project). Anyone who lands on /admin here is forwarded to it.
 */
export default function AdminMoved() {
  useEffect(() => {
    if (ADMIN_URL) window.location.replace(ADMIN_URL);
  }, []);

  return (
    <main className="page">
      <TopBar />
      <div className="auth-wrap">
        <section className="panel">
          <h1>Admin panel</h1>
          {ADMIN_URL ? (
            <>
              <p className="sub">Taking you to the admin panel…</p>
              <a href={ADMIN_URL} className="btn btn-violet btn-block">
                Open admin panel
              </a>
            </>
          ) : (
            <>
              <p className="sub">
                The admin panel runs as a separate site. Set{" "}
                <code>NEXT_PUBLIC_ADMIN_URL</code> to its address to link it from here.
              </p>
              <Link href="/" className="btn btn-violet btn-block">
                Back to homepage
              </Link>
            </>
          )}
        </section>
      </div>
    </main>
  );
}
