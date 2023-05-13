import React from 'react';
import { Container, Typography } from '@mui/material';
import styled from 'styled-components';

const StyledTypography = styled(Typography)`
  color: blue;
`;

export default function Home() {
  return (
    <Container>
      <StyledTypography variant="h1">Hello Next.js</StyledTypography>
    </Container>
  );
}
