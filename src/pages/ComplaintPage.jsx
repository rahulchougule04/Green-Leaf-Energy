import React from 'react';
import { SeoHead } from '../components/common/SeoHead';
import { ComplaintForm } from '../components/forms/ComplaintForm';

export const ComplaintPage = () => {
  return (
    <>
      <SeoHead title="Complaint Registration | Ticket Tracking" description="Register a complaint and receive an instant tracking ticket number for your solar system issue." />
      <ComplaintForm />
    </>
  );
};
