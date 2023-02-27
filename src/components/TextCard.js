import React from 'react';
import styled from 'styled-components';

const TextCardWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

function TextCard({ text, visible }) {
  return <TextCardWrapper visible={visible}>{text}</TextCardWrapper>;
}

export default TextCard;
