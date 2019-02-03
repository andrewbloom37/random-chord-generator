import React from 'react';

interface Props {
  disabled: boolean,
  update(v: number): void,
  value: number,
};

const Input = (props: Props) => (
  <input
    disabled={props.disabled}
    min='0'
    max='100'
    onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.update(Number(e.target.value))}
    step='1'
    type='number'
    value={props.value}
  />
);
export default Input;