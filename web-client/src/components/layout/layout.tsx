import React from 'react';
import { Container } from '@mui/material';

interface LayoutProps {
  children: JSX.Element;
}

export default function Layout({ children }: LayoutProps) {
  return <Container maxWidth="md">{children}</Container>;
}
