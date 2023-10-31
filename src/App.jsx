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
          link="https://github.com/UKM-LAOS/Hacktoberfest-LAOS-2023"
          title="Github Hacktoberfest"
          imagepath="/images/example.jpg"
          description="Ini adalah link repository github LAOS Hacktoberfest 2023. Silahkan klik card, maka anda akan diarahkan."
        />
        <ProjectCard
          link="https://www.canva.com/design/DAFwrdh_tvA/v8G0gRlWoZcrKIYaIA3Tlg/edit"
          title="Poster Tema Batik"
          imagepath="/images/232410101060.png"
          description="Ini adalah hasil pembuatan poster ketiga saya yang mulai berkembang."
        />
      </section>
    </>
  );
}

export default App;
