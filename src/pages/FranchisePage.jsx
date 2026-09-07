import React from 'react';
import { SeoHead } from '../components/common/SeoHead';
import { FranchiseForm } from '../components/forms/FranchiseForm';

export const FranchisePage = () => {
  return (
    <>
      <SeoHead title="Franchise Opportunity | Solar Business Franchise" description="Start a solar EPC franchise with Green Leaf Energy Solution." />
      <FranchiseForm />
    </>
  );
};
