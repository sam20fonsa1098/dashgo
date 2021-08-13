import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react';

interface IInputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

const Input = ({ name, label, ...rest }: IInputProps) => {
  return (
    <FormControl>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput 
        name={name} 
        type={name} 
        focusBorderColor="pink.500" 
        bgColor="gray.900" 
        variant="filled" 
        _hover={{bgColor: "gray.900"}} 
        size="lg"
        {...rest}/>
    </FormControl>
  );
};

export { Input }