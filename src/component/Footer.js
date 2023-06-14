import { LogoDocker, LogoGithub, LogoLinkedin, Mail } from 'react-ionicons';

export default function Footer() {
    return (
        <footer className="mt-12 mb-6">
            <div className="flex gap-4 justify-center">
                <a
                    aria-label="Go to my LinkedIn profile"
                    href="https://www.linkedin.com/in/devmegan/" 
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <LogoLinkedin
                        color={'#115e59'}
                        height="33px"
                        width="auto"
                        cssClasses={"footer-link"}
                    />
                </a>
                <a
                    aria-label="Check out my my GitHub account"
                    href="https://github.com/devmegan" 
                    rel="noopener noreferrer"
                    target="_blank" 
                >
                    <LogoGithub
                        color={'#115e59'}
                        height="33px"
                        width="auto"
                        cssClasses={"footer-link"}
                    />
                </a>
                <a
                    aria-label="Find me on Docker Hub" 
                    href="https://hub.docker.com/u/devmegan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <LogoDocker
                        color={'#115e59'}
                        height="36px"
                        width="auto"
                        cssClasses={"footer-link"}
                    />
                </a>
                <a
                    aria-label="Send me an email"
                    className="my-auto"
                    href="mailto:devmegan@protonmail.com"
                >
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
