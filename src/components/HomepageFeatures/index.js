import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function HomepageFeatures() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      }, { threshold: 0.1 });

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }
  }, []);

  return (
    <div ref={sectionRef} className={clsx(styles.features, { [styles.visible]: isVisible })}>
      <div className={styles.containerDescription}>
        <div className={styles.Edicolab}>
          <h2 className={styles.descriptionTitle}>O que é a Edicolab?</h2>
          <h4 className={styles.description}>
            O Edicolab é uma plataforma inovadora para a edição e anotação colaborativa de documentos históricos. Desenvolvido para investigadores e historiadores, permite transcrever, marcar e analisar textos antigos com etiquetas personalizadas baseadas no TEI. Para além de tornar estes documentos mais acessíveis, o nosso projeto visa melhorar a validação semântica e estrutural das marcações, garantindo maior rigor e fiabilidade.
          </h4>
        </div>
        <img className={styles.image} src='https://deti-iforal.ua.pt/_app/immutable/assets/auth-image-2-5cc28bdf.png' alt='Edicolab'></img>
      </div>
    </div>
  );
}
