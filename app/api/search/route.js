import { connectDB } from "@/lib/db";
import Profile from "@/models/Profile";

export async function GET(req) {
  await connectDB();

  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q");

  if (!q) {
    return Response.json(
      { error: "q query parameter is required" },
      { status: 400 }
    );
  }

  const profile = await Profile.findOne({
    $or: [
      { skills: { $regex: q, $options: "i" } },
      { "projects.title": { $regex: q, $options: "i" } },
      { "projects.description": { $regex: q, $options: "i" } },
    ],
  });

  return Response.json(profile);
}