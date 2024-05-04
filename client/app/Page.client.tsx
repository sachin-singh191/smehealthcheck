import React from 'react';
import Layout from './layout';
import Stepper from '../components/Stepper.client';
import Image from 'next/image';
import styles from './Page.module.css';
import logo from './logo.svg';

const Page: React.FC = () => {
  return (
    <Layout>
      <div className={styles.header}>
        <Image src={logo} alt="CrediLinq.AI" className={styles.logo} width={150} height={50} />
        <h1 className={styles.headerText}>SME HealthCheck - Get Started</h1>
      </div>
      <div className={`${styles.container} container mx-auto px-4`}>
        <Stepper />
      </div>
    </Layout>
  );
};

export default Page;