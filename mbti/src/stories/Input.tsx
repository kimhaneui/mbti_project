import './input.css'
interface InputProps {
    type: string;
    id: string;
    placeholder?: string;
    color?: string;
}
export const Input = ({
    type ='text',
    id ='id',
    placeholder ='입력하세요',
    color = 'white',
    ...props
}: InputProps) => {
    return (
      <input
      type={type}
      id={id}
      placeholder={placeholder}
      style={{ color }}
      {...props}
      >        
      </input>
    );
  };