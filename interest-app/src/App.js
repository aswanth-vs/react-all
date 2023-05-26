import { useState } from "react";
import "./App.css";
import { Button, TextField, Stack } from "@mui/material";

function App() {
  //states
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [year, setYear] = useState(0);
  const [interest, setInterest] = useState(0);

  const handleCalculate = (e) => {
    let output = (principal * year * rate) / 100;
    setInterest(output);
  };

  const handleReset = () => {
    setInterest(0);
    setPrincipal(0);
    setRate(0);
    setYear(0);
  };

  return (
    <div className="app">
      <div className="container">
        <div className="heading_text">
          <h1 className="main_heading">Simple Interest Calculator</h1>
          <p className="heading_two">Calculate your simple interest easily</p>
        </div>
        {/*  */}
        <div className="total_amount_card">
          <div className="card_text">
            <h3 className="total_amount_symbol">₹ {interest}</h3>
            <p className="total_amount_para">Total Simple Interest</p>
          </div>
        </div>
        {/*    */}
        <form>
          <div className="input_field">
            <TextField className="outlined-basic" label="₹ Principal Amount" variant="outlined" onChange={(e) => setPrincipal(e.target.value)} value={principal || ""} />
          </div>
          <div className="input_field">
            <TextField className="outlined-basic" label="Rate of Interest (P.A.)%" variant="outlined" onChange={(e) => setRate(e.target.value)} value={rate || ""} />
          </div>
          <div className="input_field">
            <TextField className="outlined-basic" label="Time Period" variant="outlined" onChange={(e) => setYear(e.target.value)} value={year || ""} />
          </div>
          {/* buttons */}
          <Stack direction="row" spacing={2} className="btn_group">
            <Button variant="contained" className="btn" onClick={handleCalculate}>
              Calculate
            </Button>
            <Button variant="outlined" className="btn" onClick={handleReset}>
              Reset
            </Button>
          </Stack>
        </form>
      </div>
    </div>
  );
}

export default App;
