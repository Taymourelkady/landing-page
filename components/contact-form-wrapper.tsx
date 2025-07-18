'use client';

import { useSearchParams } from 'next/navigation';
import { NoScrollContactForm } from '@/components/no-scroll-contact-form';

export default function ContactFormWrapper() {
  const searchParams = useSearchParams();
  const defaultInterest = searchParams.get('interest') || '';
  return <NoScrollContactForm defaultInterest={defaultInterest} />;
} 