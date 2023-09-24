function ProjectCard({ link, title, description, imagepath }) {
  return (
    <a
      href={link}
      className="p-4 cursor-pointer flex flex-col bg-slate-100 rounded-md shadow-sm hover:shadow-md"
    >
      <img
        src={imagepath}
        alt="gambar contoh"
        srcset=""
        className="rounded-md object-cover "
      />
      <p className="text-center font-righteous text-neutral-800">{title}</p>
      <p className="text-justify text-neutral-600 font-roboto">{description}</p>
    </a>
  );
}

export default ProjectCard;
