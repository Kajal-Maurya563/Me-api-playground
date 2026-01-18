import "dotenv/config";
import mongoose from "mongoose";
import Profile from "./models/Profile.js";

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined");
}

await mongoose.connect(process.env.MONGODB_URI);

await Profile.deleteMany({});

await Profile.create({
  name: "Your Name",
  email: "your@email.com",
  education: "B.Tech CSE",
  skills: ["JavaScript", "Node", "Python"],
  projects: [
    {
      title: "Me API Playground",
      description: "Intern assessment project",
      links: ["https://github.com/yourrepo"],
    },
  ],
  work: ["Intern"],
  links: {
    github: "https://github.com/yourname",
    linkedin: "https://linkedin.com/in/yourname",
    portfolio: "https://yourportfolio.com",
  },
});

console.log("✅ Database seeded successfully");
process.exit();