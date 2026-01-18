import ProfileCard from "./components/ProfileCard";
import Skills from "./components/Skills";
import ProjectSearch from "./components/ProjectSearch";
import GlobalSearch from "./components/GlobalSearch";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-4xl space-y-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Me-API Playground
        </h1>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProfileCard />
          <Skills />
        </div>
          <ProjectSearch />
          <GlobalSearch />
      </div>
    </main>
  );
}
