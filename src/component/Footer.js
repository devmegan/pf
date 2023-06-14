import { LogoDocker, LogoGithub, LogoLinkedin, Mail } from 'react-ionicons';

export default function Footer() {
    return (
        <footer className="mt-12 mb-6">
            <div className="flex gap-4 justify-center">
                <a href="https://www.linkedin.com/in/devmegan/" target="_blank" rel="noopener noreferrer">
                    <LogoLinkedin
                        color={'#115e59'}
                        height="33px"
                        width="auto"
                        cssClasses={"footer-link"}
                    />
                </a>
                <a href="https://github.com/devmegan">
                    <LogoGithub
                        color={'#115e59'}
                        height="33px"
                        width="auto"
                        cssClasses={"footer-link"}
                    />
                </a>
                <a href="https://hub.docker.com/u/devmegan">
                    <LogoDocker
                        color={'#115e59'}
                        height="36px"
                        width="auto"
                        cssClasses={"footer-link"}
                    />
                </a>
                <a href="mailto:devmegan@protonmail.com" className="my-auto">
                    <Mail
                        color={'#115e59'}
                        height="34px"
                        width="auto"
                        cssClasses={"footer-link"}
                    />
                </a>
            </div>
        </footer>
    );
}
