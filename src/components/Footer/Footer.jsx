import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;
  const onClick = () => {
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
  }

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <a  aria-label="Back To Top" className="back-to-top" onClick={onClick}>
          <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
        </a>
        <div className="social-links">
          {networks &&
            networks.map(network => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} Benjamin Dinh
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
