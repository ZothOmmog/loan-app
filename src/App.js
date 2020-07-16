import React from "react";

import FirstLoanItem from "./components/FirstInfo/FirstLoanItem";
import SecondLoanItem from "./components/SecondInfo/SecondLoanItem";
import ThirdLoanItem from "./components/ThirdInfo/ThirdLoanItem";
import { loans } from "./current-loans.json";

import "./App.css";

function App({ title }) {
  const [mainAmount, setMainAmount] = React.useState(85754);

  return (
    <div className="container">
      <div className="wrapper">
        <h1>Current Loans</h1>
        <FirstLoanItem 
          title={"First loan"} 
          totalAmount={mainAmount} 
          setTotalAmount={setMainAmount}
         />
        <SecondLoanItem title={"Second loan"} />
        <ThirdLoanItem title={"Third loan"} />
        <span>Total amounts available for invesments: ${mainAmount}</span>
      </div>
    </div>
  );
}

export default App;
