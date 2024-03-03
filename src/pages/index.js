import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Go to Documentation
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>

        <section className={styles.features}>
          <div className="container" style={{marginTop: '20px'}}>
            <div>
              <h1>Introduction</h1>
              <p> Wesago is fully featured modern forum application that is fast, scalable and responsive. It aims to be complete, featured and modern forum solution that has no fear to say 'NO' to common and outdated opinions about how forum software should be made and what it should do.</p>
              
              <div>

              <br /><br />
              <h1>Key Points</h1>
              <HomepageFeatures />

              <h1>Screenshots</h1>
              <img src="img/misago-forum.png" alt="Wesago" style={{width: '100%', marginTop: '10px'}} />
              <hr />
              <img src="img/misago-thread.png" alt="Wesago" style={{width: '100%', marginBottom: '10px'}} />

              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
