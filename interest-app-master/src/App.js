import "./App.css";
import { TextField } from "@mui/material";

function App() {
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
            <h3 className="total_amount_symbol">₹</h3>
            <p className="total_amount_para">Total Simple Interest</p>
          </div>
        </div>
        {/*    */}
        <form>
          <div className="input_field">
            <TextField id="outlined-basic" label="₹ Principal Amount" variant="outlined" />
          </div>
          <div className="input_field">
            <TextField id="outlined-basic" label="Rate of Interest (P.A.)%" variant="outlined" />
          </div>
          <div className="input_field">
            <TextField id="outlined-basic" label="Time Period" variant="outlined" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
