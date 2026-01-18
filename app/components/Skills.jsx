"use client";
import { useEffect, useState } from "react";

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/api/skills/top")
      .then((res) => res.json())
      .then(setSkills);
  }, []);

  return (
    <div className="rounded-xl bg-white p-6 shadow w-full">
      <h2 className="mb-4 text-xl font-semibold text-gray-800">
        Skills
      </h2>

      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
