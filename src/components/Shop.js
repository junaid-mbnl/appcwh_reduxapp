import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

const Shop = () => {
  const dispath = useDispatch();
  const actions = bindActionCreators(actionCreators, dispath);

  const { withdrawMoney, depositMoney } = bindActionCreators(
    actionCreators,
    dispath,
  );

  const amount = useSelector((state) => state.amount);
  return (
    <>
      <h4>Deposit / Withdraw money</h4>
      <div className="mb-3">
        {/*Without using bindAction creatos*/}
        <button className="btn btn-primary mx-2" onClick={() => {dispath(actionCreators.withdrawMoney(100))}}>-</button>{" "}
        {/*We have to use arrow function here because the function has arguments - something like that*/}
        Update Balance without using bindAction
        <button className="btn btn-primary mx-2" onClick={() => {dispath(actionCreators.depositMoney(100))}}>+</button>
      </div>

      <div className="mb-3">
        {/*Now using bindAction creatos but without destructuring*/}
        <button className="btn btn-primary mx-2" onClick={() => {actions.withdrawMoney(100)}}>-</button>
        {/*We have to use arrow function here because the function has arguments - something like that*/}
        Update Balance using bindAction but without destructuring
        <button className="btn btn-primary mx-2" onClick={() => {actions.depositMoney(100)}}>+</button>
      </div>
      
      <div className="mb-3">
        {/*Now using bindAction creatos and with destructuring*/}
        <button className="btn btn-primary mx-2" onClick={() => {withdrawMoney(100)}}>-</button>
        {/*We have to use arrow function here because the function has arguments - something like that*/}
        Update Balance ({amount}) using bindAction and using destructuring
        <button className="btn btn-primary mx-2" onClick={() => {depositMoney(100)}}>+</button>
      </div>
    </>
  );
};

export default Shop;
