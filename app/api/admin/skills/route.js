import connectDB from "@/app/lib/db";
import Profile from "@/app/models/Profile";

export async function POST(req) {
  const adminKey = req.headers.get("x-admin-key");

  if (adminKey !== process.env.ADMIN_KEY) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { skill } = await req.json();

  await connectDB();

  await Profile.updateOne(
    {},
    { $addToSet: { skills: skill } } // prevents duplicates
  );

  return Response.json({ success: true });
}
