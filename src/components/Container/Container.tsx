import React, { FC } from 'react';
import { MainContainer } from './Container.styled';

interface Props {
  children: React.JSX.Element
}

export const Container: FC<Props> = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};
