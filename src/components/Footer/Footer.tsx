import { Container } from '../Container';
import { Item, Link, List, SyledFooter, Wrap } from './Footer.styled';
import logo from '~/assets/logo.svg';
import { BsGithub } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import { AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';

export const Footer = () => {
  return (
    <SyledFooter>
      <Container>
        <Wrap>
          <List>
            <Item>
              <Link href="mailto:marina.gorb@gmail.com">
                <AiOutlineMail size={32} />
              </Link>
            </Item>
            <Item>
              <Link href="https://t.me/MarynaSereda" target="_blank">
                <FaTelegramPlane size={32} />
              </Link>
            </Item>
            <Item>
              <Link
                href="https://www.linkedin.com/in/maryna-sereda/"
                target="_blank"
              >
                <AiFillLinkedin size={32} />
              </Link>
            </Item>
            <Item>
              <Link href="https://github.com/marisereda" target="_blank">
                <BsGithub size={32} />
              </Link>
            </Item>
          </List>
        </Wrap>
      </Container>
    </SyledFooter>
  );
};
