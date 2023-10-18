import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

type SelectProps = {
  options: any[];
  value: string;
  onChange: (...args: any[]) => any;
};

export default function BasicSelect(props: SelectProps) {
  const { options, value, onChange } = props;

  return (
      <FormControl fullWidth className="ms-2 my-2">
        <InputLabel id="demo-simple-select-label">Country*</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Country*"
          onChange={onChange}
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option.value} className="">
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
  );
}
