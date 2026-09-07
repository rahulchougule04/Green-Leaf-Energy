import React from 'react';
import { SeoHead } from '../components/common/SeoHead';
import { DealerForm } from '../components/forms/DealerForm';

export const DealerPage = () => {
  return (
    <>
      <SeoHead title="Become a Dealer | Channel Partner Program" description="Register as an authorized solar dealer or channel partner with Green Leaf Energy Solution." />
      <DealerForm />
    </>
  );
};
