"use client";
import { useEffect, useState } from "react";

export default function ProfileLinks() {
  const [links, setLinks] = useState(null);

  useEffect(() => {
    fetch("/api/profile")
      .then((res) => res.json())
      .then((profile) => setLinks(profile.links));
  }, []);

  if (!links) return null;

  return (
    <section className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-2 text-xl font-semibold text-gray-800">My Links</h2>
      <div className="flex space-x-4 text-blue-600">
        {links.github && (
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
        {links.linkedin && (
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        )}
        {links.portfolio && (
          <a href={links.portfolio} target="_blank" rel="noopener noreferrer">
            Portfolio
          </a>
        )}
      </div>
    </section>
  );
}
