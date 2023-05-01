import styled from 'styled-components';
import bgImage from '~/assets/bg-image.png';
import bgLine from '~/assets/rectangle.png';

export const Wrap = styled.li`
  /* max-width: 380px; */
  padding-top: 20px;
  padding-bottom: 36px;
  box-shadow: -2px 6px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background-image: url(${bgImage}),
    linear-gradient(115deg, #471ca9 0%, #5736a3 55%, #4b2a99 80%);
  background-position: center top 28px, center;
  background-repeat: no-repeat;
`;

export const Logo = styled.img`
  padding-left: 20px;
  margin-bottom: 136px;
`;

export const AvatarWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 26px;
  /* background: url(${bgLine}) no-repeat center; */
  background-image: url(${bgLine}), url(${bgLine});
  background-position: left top 50%, right top 50%;
  background-repeat: no-repeat, no-repeat;
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const Tweets = styled.p`
  margin-bottom: 16px;
`;

export const Followers = styled.p`
  margin-bottom: 26px;
`;
