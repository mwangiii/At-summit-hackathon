import React from "react";

// dispay payment successfull message if payment is successfull
// display payment unsuccessfull message if payment fails
// display payment pending message if payment is pending
// display payment canceled message if payment is cancled
const Success = ({ paymentStatus }) => {
  let message;

  switch (paymentStatus) {
    case "success":
      message = "Payment successful";
      break;
    case "failure":
      message = "Payment unsuccessful";
      break;
    case "pending":
      message = "Payment pending";
      break;
    case "canceled":
      message = "Payment canceled";
      break;
    default:
      message = "Unknown payment status";
  }

  return <div>{message}</div>;
};

export default Success;