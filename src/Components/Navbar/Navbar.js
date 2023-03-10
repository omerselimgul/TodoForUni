import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  NativeSelect,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [check, setCheck] = useState(false);
  const onChangeHandler = (event, value) => {
    console.log(event);
    setCheck(!check);
  };
  return (
    <div className="addedcontainer">
      <FormControlLabel
        control={
          <Checkbox
            value={check}
            onClick={(event, value) => {
              onChangeHandler();
            }}
          />
        }
        label="Yeni Topic Ekle"
      />
      {check ? (
        <TextField
          id="standard-basic"
          label="Topic"
          variant="standard"
          size="small"
        />
      ) : (
        // <div style={{ width: "14rem" }}>
        <FormControl size="small">
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Topic
          </InputLabel>
          <NativeSelect
            // defaultValue={30}
            placeholder="select topic"
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
          >
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </NativeSelect>
        </FormControl>
        // </div>
      )}
      <TextField
        id="standard-basic"
        label="Ödev"
        variant="standard"
        size="small"
      />
      <Button variant="text" style={{ color: "black" }}>
        Ekle
      </Button>
    </div>
  );
};

export default Navbar;
