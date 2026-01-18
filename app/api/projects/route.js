import { connectDB } from "@/lib/db";
import Profile from "@/models/Profile";

export async function GET(req) {
  await connectDB();

  const { searchParams } = new URL(req.url);
  const skill = searchParams.get("skill");

  if (!skill) {
    return Response.json(
      { error: "skill query parameter is required" },
      { status: 400 }
    );
  }

  const profile = await Profile.findOne();
  if (!profile) return Response.json([]);

  // 🔥 word-boundary regex
  const regex = new RegExp(`\\b${skill}\\b`, "i");

  const filteredProjects = profile.projects.filter(
    (project) =>
      regex.test(project.description) ||
      regex.test(project.title)
  );

  return Response.json(filteredProjects);
}
