import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function HomepageFeatures() {
  return (
    <div className={styles.features}>
      <div className={styles.containerDescription}>
        <div className={styles.Edicolab}>
          <h2>O que é a plataforma Edicolab?</h2>
          <p className={styles.description}>
            O Edicolab é uma plataforma inovadora para a edição e anotação colaborativa de documentos históricos. Desenvolvido para investigadores e historiadores, permite transcrever, marcar e analisar textos antigos com etiquetas personalizadas baseadas no TEI. Para além de tornar estes documentos mais acessíveis, o nosso projeto visa melhorar a validação semântica e estrutural das marcações, garantindo maior rigor e fiabilidade.
          </p>
        </div>
        <img className={styles.image} src='https://deti-iforal.ua.pt/_app/immutable/assets/auth-image-2-5cc28bdf.png' ></img>
      </div>
    </div>
  );
}