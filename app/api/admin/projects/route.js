import connectDB from "@/app/lib/db";
import Profile from "@/app/models/Profile";

export async function POST(req) {
  const adminKey = req.headers.get("x-admin-key");

  if (adminKey !== process.env.ADMIN_KEY) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { title, description, links } = await req.json();

  await connectDB();

  await Profile.updateOne(
    {},
    {
      $push: {
        projects: {
          title,
          description,
          links, // must be array of strings
        },
      },
    }
  );

  return Response.json({ success: true });
}
