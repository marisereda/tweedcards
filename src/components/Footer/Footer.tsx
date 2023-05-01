import { BsFillEnvelopeAtFill, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import { Box } from '../Box';
import { Container } from '../Container';
import { Link } from './Footer.styled';
import { theme } from '~/theme';

const links = [
  {
    href: 'mailto:marina.gorb@gmail.com',
    icon: BsFillEnvelopeAtFill,
  },
  {
    href: 'https://t.me/MarynaSereda',
    icon: FaTelegramPlane,
  },
  {
    href: 'https://www.linkedin.com/in/maryna-sereda',
    icon: BsLinkedin,
  },
  {
    href: 'https://github.com/marisereda',
    icon: BsGithub,
  },
];

export const Footer = () => {
  return (
    <Box as="footer" py={8} background={theme.colors.primary['950']}>
      <Container>
        <Box display="flex" justifyContent="center">
          <Box
            as="ul"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gridGap={16}
          >
            {links.map(({ href, icon: Icon }) => (
              <li key={href}>
                <Link href={href} target="_blank">
                  <Icon size={32} />
                </Link>
              </li>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
