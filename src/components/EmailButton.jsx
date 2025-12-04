import { FaEnvelope } from 'react-icons/fa';

export function EmailButton() {
  return (
    <a
      href="mailto:Matheuscunha1000@gmail.com"
      className="email-button"
      title="Matheuscunha1000@gmail.com"
      aria-label="Enviar email"
    >
      <FaEnvelope />
    </a>
  );
}

