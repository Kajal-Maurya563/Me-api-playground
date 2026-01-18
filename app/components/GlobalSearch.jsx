"use client";
import { useState } from "react";

export default function GlobalSearch() {
    const [q, setQ] = useState("");
    const [result, setResult] = useState(null);

    const search = async () => {
        const res = await fetch(`/api/search?q=${q}`);
        const data = await res.json();
        setResult(data);
    };

    return (
        <section className="rounded-xl bg-white p-6 shadow">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
                Global Search
            </h2>

            <div className="flex flex-col sm:flex-row gap-3 mt-3">
                <input
                    className="border rounded px-3 py-2 flex-1"
                    placeholder="Search skills or projects"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                />

                <button
                    onClick={search}
                    className="bg-black text-white px-4 py-2 rounded"
                >
                    Search
                </button>
            </div>


            {result && (
                <div className="mt-4 space-y-4">

                    {/* Skills */}
                    {result.skills?.length > 0 && (
                        <div>
                            <h3 className="font-semibold mb-2">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {result.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="bg-gray-200 dark:bg-zinc-700 px-3 py-1 rounded-full text-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Projects */}
                    {result.projects?.length > 0 && (
                        <div>
                            <h3 className="font-semibold mb-2">Projects</h3>
                            <div className="space-y-3">
                                {result.projects.map((p, i) => (
                                    <div
                                        key={i}
                                        className="border rounded p-3 dark:border-zinc-700"
                                    >
                                        <h4 className="font-medium">{p.title}</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {p.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Empty state */}
                    {(!result.skills?.length && !result.projects?.length) && (
                        <p className="text-sm text-gray-500">No results found.</p>
                    )}

                </div>
            )}

        </section>
    );
}
