"use client";
import { useState } from "react";

export default function ProjectSearch() {
    const [skill, setSkill] = useState("");
    const [projects, setProjects] = useState([]);

    const search = async () => {
        const res = await fetch(`/api/projects?skill=${skill}`);
        const data = await res.json();
        setProjects(data);
    };

    return (
        <section className="rounded-xl bg-white p-6 shadow">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
                Search Projects by Skill
            </h2>

            <div className="flex flex-col sm:flex-row gap-3 mt-3">
                <input
                    className="border rounded px-3 py-2 flex-1 text-black placeholder-gray-400"
                    placeholder="Enter skill (e.g. python)"
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                />

                <button
                    onClick={search}
                    className="bg-black text-white px-4 py-2 rounded"
                >
                    Search
                </button>
            </div>

            <ul className="space-y-2 mt-4">
                {projects.map((p, i) => (
                    <li
                        key={i}
                        className="rounded border border-gray-200 p-3"
                    >
                        <strong className="text-gray-800">{p.title}</strong>
                        <p className="text-gray-600">{p.description}</p>

                        {/* Project links as "Link" */}
                        {p.links?.length > 0 && (
                            <div className="mt-2 space-x-2">
                                {p.links.map((link, idx) => (
                                    <a
                                        key={idx}
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 underline"
                                    >
                                        Link
                                    </a>
                                ))}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
}
