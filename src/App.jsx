import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <>
      <Navbar />
      <h1 className="text-neutral-800 my-4 text-4xl font-black_ops_one text-center">
        Daftar Projek Peserta <br /> Pelatihan GIT 2023
      </h1>
      <section className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-4 container mx-auto">
        <ProjectCard
          link="https://instagram.com/seekornetijenbelaka?igshid=OGQ5ZDc2ODk2ZA=="
          title="My Instagram"
          imagepath="/images/232410103022.jpg"
          description="Ini adalah link menuju instagram pribadi Oktavian. Difollow ya teman-teman. :)"
        />
      </section>
    </>
  );
}

export default App;
