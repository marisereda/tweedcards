import { BsArrowBarRight } from 'react-icons/bs';
import logo from '~/assets/logo.svg';
import { Box } from '../Box';
import { Container } from '../Container';
import { Dropdown } from '../Dropdown';
import { Logo, StyledLink } from './Header.styled';
import { theme } from '~/theme';

export const Header = () => {
  return (
    <Box as="header" py={24} background={theme.colors.primary['600']}>
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Logo href="https://goit.global/ua/" target="_blank">
            <img src={logo} width={152} alt="GO IT" />
          </Logo>
          <Dropdown />
          <StyledLink to="/" aria-label="go home">
            <BsArrowBarRight size={24} />
          </StyledLink>
        </Box>
      </Container>
    </Box>
  );
};
