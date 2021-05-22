import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Title = styled.h1`
  font-size: 3rem;
  line-height: 3.2rem;
  font-weight: normal;
  margin-bottom: 2rem;
`;

export const Blockquote = styled.blockquote`
  border-left: 1px solid #ccc;
  padding-left: 1em;
  font-size: 2rem;
  line-height: 2.7rem;
  margin: 2rem 0 2rem 2rem;
`;

export const Ul = styled.ul`
  margin-left: 2.6rem;

  li {
    font-size: 2rem;
    line-height: 2.7rem;
    margin: 2rem 0;
  }
`;
