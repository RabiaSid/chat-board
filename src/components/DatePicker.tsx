import * as React from 'react';
// import dayjs, { Dayjs } from 'dayjs';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

type DatePickerProps = {
  label: string;
};

export default function DatePickerValue(props: DatePickerProps) {
  // const { label } = props
  // const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));

  return (
    <div>
      
    </div>
    // <LocalizationProvider dateAdapter={AdapterDayjs} >
    //   <DemoContainer components={['DatePicker', 'DatePicker']}>
    //     <DatePicker
    //      className="ms-2 DatepickerWidth"
    //       label={label}
    //       value={value}
    //       onChange={(newValue) => setValue(newValue)}
    //     />
    //   </DemoContainer>
    // </LocalizationProvider>
  );
}
