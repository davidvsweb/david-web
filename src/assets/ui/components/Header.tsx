import profile_picture from "./../../../assets/img/profile-picture.jpg";
import CV from "./../../../assets/static/CV-VSJD.pdf";

export function Header() {
  return (
    <header>
      <div className="grid md:grid-cols-3 gap-8 px-4 py-8 md:p-8 items-center container">
        <div className="flex justify-center">
          <img
            className="img-fluid rounded-full w-80 md:w-full max-w-72"
            src={profile_picture}
            alt="profile-picture"
          />
        </div>
        <div className="md:col-span-2 flex flex-col items-center md:items-start gap-4" id="about_me">
          <h1 className="text-3xl font-bold text-center md:text-left">
            David Vázquez Sánchez
          </h1>
          <h3 className="text-green font-bold text-lg">Desarrollador | Front End</h3>
          <p className="text-md text-center md:text-left">
            Soy un desarrollador apasionado, comprometido con crear
            proyectos de alto impacto mediante el uso de las mejores prácticas y
            tecnologías modernas. Me enfoco en ofrecer soluciones innovadoras
            que destacan en el mercado y brindan resultados excepcionales.
          </p>
          <div className="flex gap-4">
            <a
              className="bg-[#4A9F98] py-3 px-4 rounded-md hover:text-white font-bold"
              href={CV}
              target="_blank"
            >
              Descargar CV              
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
