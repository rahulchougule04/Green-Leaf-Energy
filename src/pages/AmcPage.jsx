import React from 'react';
import { SeoHead } from '../components/common/SeoHead';
import { AmcRegistrationForm } from '../components/forms/AmcRegistrationForm';

export const AmcPage = () => {
  return (
    <>
      <SeoHead title="AMC Registration | Annual Maintenance Contract" description="Register for Annual Maintenance Contracts (AMC) for solar panel cleaning and inverter safety." />
      <AmcRegistrationForm />
    </>
  );
};
