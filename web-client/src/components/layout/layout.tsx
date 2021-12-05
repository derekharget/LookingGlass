import React from 'react';
import { Container } from '@mui/material';

interface LayoutProps {
    children: JSX.Element;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <Container maxWidth="sm" sx={{ mt: 2, backgroundColor: '#e8f4f8' }}>
            {children}
        </Container>
    );
}
