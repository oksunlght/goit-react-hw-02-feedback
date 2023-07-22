import styled from '@emotion/styled';

export const Button = styled.button`
  width: 100px;
  height: 30px;

  border: none;
  outline: none;
  border-radius: 5px;

  color: #05131c;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: bold;

  background-color: #ffe9fc;

  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  &:hover,
  &:focus {
    background-color: #9562c0;
    color: #ffe9fc;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 30px;

  font-size: 32px;

  color: #05131c;
`;

export const Container = styled.section`
  padding-left: 30px;
  padding-top: 30px;
`;

export const Message = styled.p`
  margin-left: 30px;
  margin-top: 30px;

  font-size: 18px;
  color: #05131c;
  font-weight: 500;
`;

export const Item = styled.li`
  font-size: 18px;
  color: #05131c;
  font-weight: 500;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
