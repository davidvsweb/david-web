import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export function Footer() {
    return (
        <footer className="bg-black p-5 text-white" id="contacto">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="">
                    <h5 className="text-center mb-3 font-bold">Contacto</h5>
                    <p className="d-block">Teléfono: <a href="tel:+5510750696" className="text-green font-bold">55 1075 0696</a>
                    </p>
                    <p className="">Correo: <a href="mailto: davidwebcode@gmail.com"
                        className="text-green font-bold">davidwebcode@gmail.com</a></p>
                    <p className="">Página web: <a href="https://davidvsweb.github.io/david-web/"
                        className="text-green font-bold">davidvsweb.github.io/david-web</a>
                    </p>
                </div>                
                <div className="col-lg-4 col-sm-12 my-3">
                    <h5 className="text-center mb-3 font-bold">Redes sociales</h5>
                    <div className="flex justify-center">
                        <a href="https://github.com/davidvsweb" className="text-green" target="_blank">
                            <GitHubIcon sx={{ fontSize: '40px' }} />
                        </a>
                        <a href="https://www.linkedin.com/in/david-vázquez-27078920b" className="text-green" target="_blank">
                            <LinkedInIcon sx={{ fontSize: '40px' }} className="mx-3" />
                        </a>
                        <a href="https://www.instagram.com/david.web.code/" className="text-green" target="_blank">
                            <InstagramIcon sx={{ fontSize: '40px' }} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

