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
          link="https://www.instagram.com/p/CwKSX9ouLyU/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
          title="hot wheels titipan"
          imagepath="/images/232410103090.png"
          description="Ini adalah hasil karya saya, tetapi milik orang"
        />
      </section>
    </>
  );
}

export default App;
