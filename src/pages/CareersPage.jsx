import React from 'react';
import { SeoHead } from '../components/common/SeoHead';
import { CareerForm } from '../components/forms/CareerForm';

export const CareersPage = () => {
  return (
    <>
      <SeoHead title="Careers | Job Openings in Solar EPC" description="Explore job opportunities for solar electrical design engineers, site supervisors, and subsidy executives at Green Leaf Energy Solution." />
      <CareerForm />
    </>
  );
};
