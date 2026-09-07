import React from 'react';
import { SeoHead } from '../components/common/SeoHead';
import { ServiceRequestForm } from '../components/forms/ServiceRequestForm';

export const ServiceRequestPage = () => {
  return (
    <>
      <SeoHead title="Service Request | Solar Maintenance Booking" description="Book after-sales service, panel cleaning, or technical maintenance for your solar system." />
      <ServiceRequestForm />
    </>
  );
};
