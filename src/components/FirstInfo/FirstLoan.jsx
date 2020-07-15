import React from "react";
import { loans } from "../../current-loans.json";

import "../../App.css";

function FirstLoan() {
  const [totalAmount, setTotalAmount] = React.useState(0);
  const [totalAvailable, setTotalAvailable] = React.useState(0);

  const handleInputChange = (e) => {
    e.preventDefault();

    const number = +e.target.value;

    if (!isNaN(number)) {
      setTotalAmount(number);
      setTotalAvailable(number);
    }
  };

  const amountGap = (e) => {
    e.preventDefault();
    console.log(totalAmount);
  };

  const convertAmount = (str) => {
    return Number(str.split(",").join(""));
  };

  const convertAvailable = (str) => {
    return Number(str.split(",").join(""));
  };

  const firstLoans = loans
    .filter((loan) => loan.id === "1")
    .map((loan) => (
      <div key={loan}>
        <p key={loan.title}>{loan.title}</p>
        <p key={loan.available}>
          Amount available:{" "}
          {convertAvailable(loan.available) - totalAvailable < 0
            ? "Amount available is out"
            : convertAvailable(loan.available) - totalAvailable}
        </p>
        <p key={loan.term_remaining}>Loan ends in: {loan.term_remaining}</p>
        <p key={loan.amount}>
          Investment amount:{" "}
          {convertAmount(loan.amount) - totalAmount < 0
            ? "Your money is out"
            : convertAmount(loan.amount) - totalAmount}
        </p>
      </div>
    ));

  return (
    <div className="form__container">
      <div className="back__drop">
        <div className="form-group">
          <h2>Invest in Loan</h2>
          {firstLoans}
          <div className="investing__block">
            <input
              className="form-control form-control-lg"
              type="text"
              onChange={handleInputChange}
            />
            <button
              type="button"
              onClick={amountGap}
              className="btn btn-outline-success"
            >
              invest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstLoan;
