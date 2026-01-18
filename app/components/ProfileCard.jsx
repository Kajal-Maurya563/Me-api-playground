"use client";
import { useEffect, useState } from "react";

export default function ProfileCard() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("/api/profile")
      .then((res) => res.json())
      .then(setProfile);
  }, []);

  if (!profile) return <p className="text-gray-500">Loading profile...</p>;

  return (
    <div className="rounded-xl bg-white p-6 shadow w-full">
      <h2 className="mb-4 text-xl font-semibold text-gray-800">Profile</h2>

      <div className="space-y-2 text-gray-700">
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Education:</strong> {profile.education}</p>
        <p><strong>Email:</strong> {profile.email}</p>
      </div>

      {profile.links && (
        <div className="mt-4 flex flex-col space-x-6 text-blue-600">
          {profile.links.github && (
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              GitHub
            </a>
          )}
          {profile.links.linkedin && (
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              LinkedIn
            </a>
          )}
          {profile.links.portfolio && (
            <a
              href={profile.links.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Portfolio
            </a>
          )}
        </div>
      )}
    </div>
  );
}
