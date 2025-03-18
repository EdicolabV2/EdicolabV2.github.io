import React, { useEffect, useRef, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import clsx from 'clsx';
import styles from './styles.module.css';

import andre from '../../../static/img/TeamPhotos/andre.png';
import antonio from '../../../static/img/TeamPhotos/antonio.png';
import goncalo from '../../../static/img/TeamPhotos/goncalo.png';
import hugo from '../../../static/img/TeamPhotos/hugo.png';
import pedro from '../../../static/img/TeamPhotos/pedro.png';

const teamMembers = [
  { name: "André Dora", roleA: "مَقرُبة", role: "UI Designer", github: "https://github.com/andredora", image: andre },
  { name: "António Alberto", roleA: "سفينة", role: "Product Owner", github: "https://github.com/antoniocsh", image: antonio },
  { name: "Gonçalo Sousa", roleA: "هاتِفيّ", role: "PWP Master", github: "https://github.com/goncalofcs18", image: goncalo },
  { name: "Hugo Sousa", roleA: "أرجو", role: "Architect", github: "https://github.com/hugaos", image: hugo },
  { name: "Pedro Oliveira", roleA: "اِرتِكاب", role: "Devops", github: "https://github.com/TKahk", image: pedro },
];

const TeamSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(Array(teamMembers.length).fill(false));

  const hoverTimeout = useRef(null);
  const leaveTimeout = useRef(null);

  const observer = useRef(
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index'), 10);
          setIsVisible((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
        }
      });
    }, { threshold: 0.1 }) // Ajuste o threshold conforme necessário
  );

  const handleMouseEnter = (index) => {
    clearTimeout(leaveTimeout.current); // Cancela o fade-out se o hover voltar rápido
    hoverTimeout.current = setTimeout(() => {
      setHoveredIndex(index);
    }, 300); // Pequeno atraso ao entrar
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout.current); // Cancela o fade-in se o rato sair rápido
    leaveTimeout.current = setTimeout(() => {
      setHoveredIndex(null);
    }, 300); // Atraso para suavizar o fade-out
  };

  useEffect(() => {
    const elements = document.querySelectorAll(`.${styles.teamMember}`);
    elements.forEach((el, index) => {
      el.setAttribute('data-index', index);
      observer.current.observe(el);
    });

    return () => {
      const elements = document.querySelectorAll(`.${styles.teamMember}`);
      elements.forEach((el) => {
        observer.current.unobserve(el);
      });
    };
  }, []);

  return (
    <section className={clsx('container', styles.teamSection)}>
      <h2 className={styles.title}>Meet Our Team</h2>
      <div className={styles.teamContainer}>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={clsx(styles.teamMember, styles.teamCard, {
              [styles.visible]: isVisible[index],
            })}
            style={{ '--index': index }}

          >
            <div className={styles.imageContainer}>
              <img src={member.image} alt={member.name} className={styles.teamImage} />
              <div className={styles.overlay}>
                <a href={member.github} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                  <FaGithub className={styles.githubIcon} />
                </a>
              </div>
            </div>
            <div className="tag-name-container">
              <p className={styles.name}>{member.name}</p>
              <p onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className={clsx(styles.role, {
                  [styles.fadeIn]: hoveredIndex === index,
                  [styles.fadeOut]: hoveredIndex !== index && hoveredIndex !== null
                })}
              >
                {hoveredIndex === index ? member.role : member.roleA}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;