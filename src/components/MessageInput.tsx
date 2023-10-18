import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { GrSend } from "react-icons/gr";

type InputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (...args: any[]) => any;
  label?: string;
  className?:any;
  onClick?:any
};

export default function MessageInput(props: InputProps) {
  const { placeholder, value, onChange, label , className, onClick} = props;

  return (
    // <Box
    //   component="form"
    //   sx={{
    //     "& .MuiTextField-root": { m: 1, width: "100%" },
    //   }}
    //   noValidate
    //   autoComplete="off"
    // >
    //   <div>
    //     <TextField
    //       required
    // placeholder={placeholder}
    // value={value}
    // onChange={onChange}
    //       id="outlined-required"
    //       label={label}
    //       defaultValue="Hello World"
    //     />
    //   </div>
    // </Box>
    <div className="row m-0 p-0 input_field d-flex align-items-center my-2" style={{height:'6vh'}}>
      <div className="col-11 ps-3">
      <input placeholder={placeholder} value={value} onChange={onChange} className={className} />
      </div>
      <div className="col-1 d-flex flex-column align-items-end pe-4" onClick={onClick}>
      <GrSend size={25} />
      </div>
    </div>
   
  );
}
