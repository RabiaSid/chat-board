import Button from '@mui/material/Button';

type ButtonProps = {
  label: string;
  onClick: (...args: any[]) => any;
};

export default function BasicButtons(props: ButtonProps) {
  const { label, onClick } = props

  return <Button className='ms-2' onClick={onClick} variant="contained" fullWidth={true}>{label}</Button>
}