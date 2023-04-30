import { Container } from '../Container';
import { Dropdown } from '../Dropdown';
import { PinRightIcon } from '@radix-ui/react-icons';

import logo from '~/assets/logo.svg';
import { Menu, StyledHeader, StyledLink } from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Menu>
          <a href="https://goit.global/ua/" target="_blank">
            <img src={logo} width={152} alt="GO IT" />
          </a>
          <Dropdown />
          <StyledLink to="/">
            <PinRightIcon />
          </StyledLink>
        </Menu>
      </Container>
    </StyledHeader>
  );
};
