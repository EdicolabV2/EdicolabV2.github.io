import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Architecture from '../../../static/img/3d-architecture.png';
import document from '../../../static/img/document.png';
import achievement from '../../../static/img/achievement.png';
import video from '../../../static/videos/Video.mp4';

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
      <h2 className={styles.descriptionTitle}>What do we have to show you?</h2>

      <div className={styles.containerFlex}>
        <div className={clsx(styles.Documents , styles.zoom)}>
          <h4 className={styles.descriptionSubTitle}>Documents</h4>
          <a href="/docs/Documents">
            <img className={styles.icone} src={document} alt="Documents" />
          </a>
        </div>
        <div className={clsx(styles.Deliverables , styles.zoom)}>
          <h4 className={styles.descriptionSubTitle}>Deliverables</h4>
          <a href="/milestones">
            <img className={styles.icone} src={achievement} alt="Milestones" />
          </a>
        </div>
      </div>

      <div className={styles.videoContainer}>
        <h4 className={styles.descriptionSubTitle}>Video</h4>
        <iframe
          className={styles.video}
          src="https://www.youtube.com/embed/xMgcqNJxqqo"
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>
      
    </div>
  );
}
