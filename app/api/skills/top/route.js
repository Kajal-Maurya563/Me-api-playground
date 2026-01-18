import { connectDB } from "@/lib/db";
import Profile from "@/models/Profile";

export async function GET() {
  await connectDB();

  const profile = await Profile.findOne();
  if (!profile) return Response.json([]);

  return Response.json(profile.skills);
}