import { Container } from '../Container';
import { Dropdown } from '../Dropdown';
import { PinRightIcon } from '@radix-ui/react-icons';

import logo from '~/assets/logo.svg';
import { Logo, Menu, StyledHeader, StyledLink } from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Menu>
          <Logo href="https://goit.global/ua/" target="_blank">
            <img src={logo} width={152} alt="GO IT" />
          </Logo>
          <Dropdown />
          <StyledLink to="/">
            <PinRightIcon width={24} height={24} />
          </StyledLink>
        </Menu>
      </Container>
    </StyledHeader>
  );
};
