import React from 'react'

export default function Form() {
  return (
    <div>Form</div>
  )
}


// import { useState } from "react";
// import Form from "react-bootstrap/Form";
// import InputField from "./Input";
// import BasicButtons from "./Button";
// import { SelectChangeEvent } from "@mui/material/Select";
// import BasicSelect from "./Select";
// import SwitchLabels from "./Switch";
// import IconButton from "./IconButton";
// import FacebookIcon from '@mui/icons-material/Facebook';
// import CheckboxLabels from "./CheckBox";
// import { DatePicker } from "@mui/x-date-pickers";
// import DatePickerValue from "./DatePicker";

// function CustomizedForm() {
//   const [inputValue, setInputValue] = useState("");
//   const [selectedOption, setSelectedOption] = useState("");

//   const handleButtonClick = () => {
//     // Handle button click logic
//   };

//   const handleInputChange = (e: any) => {
//     setInputValue(e.target.value);
//   };

//   const handleSelectChange = (event: SelectChangeEvent) => {
//     setSelectedOption(event.target.value as string);
//   };

//   return (
//     <Form>
//       <div className="row bg-white rounded-3 shadow py-4 ps-2 pe-3">
//       <div className="col-12 py-2">
//           <h4>Please Enter Your Detail</h4>
//         </div>
//         <div className="col-6">
//           <InputField
//             placeholder="Required"
//             value={inputValue}
//             onChange={handleInputChange}
//             label="Your First Name"
//           />
//         </div>
//         <div className="col-6">
//           <InputField
//             placeholder="Required"
//             value={inputValue}
//             onChange={handleInputChange}
//             label="Your Last Name"
//           />
//         </div>
//         <div className="col-12 ">
//           <InputField
//             placeholder="Required"
//             value={inputValue}
//             onChange={handleInputChange}
//             label="Your Email"
//           />
//         </div>
//         <div className="col-12">
//           <BasicSelect
//             options={[
//               { value: "1", label: "Pakistan" },
//               { value: "2", label: "Srilanka" },
//               { value: "3", label: "India" },
//             ]}
//             value={selectedOption}
//             onChange={handleSelectChange}
//           />
//         </div>
//         <div className="col-12">
//           <DatePickerValue label="Age*" />
//         </div>
//         <div className="col-12">
//         <div className="row">
//         <div className="col-4">
//           <CheckboxLabels label="male"/>
//         </div>
//         <div className="col-4">
//           <CheckboxLabels label="female"/>
//         </div>
//         </div>
//         </div>
//         <div className="col-4">
//           <SwitchLabels />
//         </div>
//         <div className="col-12">
//           <IconButton startIcon={<FacebookIcon />} label="facebook" onClick={handleButtonClick} />
//         </div>
//         <div className="col-12">
//           <BasicButtons label="Submit" onClick={handleButtonClick} />
//         </div>
//       </div>
//     </Form>
//   );
// }

// export default CustomizedForm;
