'use client';

import { useEffect, useState } from 'react';
import { NoScrollContactForm } from '@/components/no-scroll-contact-form';

export default function ContactFormWrapper() {
  const [defaultInterest, setDefaultInterest] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      const interest = searchParams.get('interest') || '';
      setDefaultInterest(interest);
    }
  }, []);

  return <NoScrollContactForm defaultInterest={defaultInterest} />;
}
