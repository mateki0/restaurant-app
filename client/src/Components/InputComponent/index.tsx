import React from 'react';
import Input from './styled/Input';
import InputLabel from './styled/InputLabel';
import InputWrapper from './styled/InputWrapper';

interface InputProps {
  name: string;
  label: string;
  type: string;
}
const InputComponent = ({ name, label, type }: InputProps) => {
  return (
    <InputWrapper>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Input name={name} id={name} type={type} required />
    </InputWrapper>
  );
};

export default InputComponent;
