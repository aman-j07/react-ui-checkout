import checkoutlogo from "../assets/checkout-logo.png";
import USPS from "../assets/USPS.png";
import PayPal from "../assets/PayPal.png";
import Maestro from "../assets/Maestro.png";
import Mastercard from "../assets/Mastercard.png";
import Discover from "../assets/Discover.png";
import Visa from "../assets/Visa.png";
import LockIcon from "../assets/lock-icon.svg";
import NortonLogo from "../assets/Norton -logo.png";
import { TextField } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useRef } from "react";

type refObjType={
  orderReview: null | HTMLDivElement;
  discount: null | HTMLDivElement;
  billSummary: null | HTMLDivElement;
  shippingmethods: HTMLDivElement[];
  paymentmethods: HTMLDivElement[];
}

function Checkout() {

  const refsObj = useRef<refObjType>({
    // below three keys are used to change dropped state of divisions
    orderReview: null,
    discount: null,
    billSummary: null,
    // below two keys are used to have an array of all methods to alter their css when their radio button is clicked 
    shippingmethods: [],
    paymentmethods: [],
  });

  return (
    <div className="checkout">
      <header className="head">
        <img className="head__logo" src={checkoutlogo} alt="logo" />
        <span className="head__items">
          <span>Already have an account?</span>
          <button className="btn btn--link">Sign In</button>
        </span>
      </header>
      <main className="checkout__body">
        <section className="checkout__part checkout__part--left">
          <div className="checkout__billadd card">
            <h4 className="card__head">Billing Address</h4>
            <div className="card__body">
              <form className="checkout__form">
                <TextField label="First Name" variant="outlined" size="small" />
                <TextField label="Last Name" variant="outlined" size="small" />
                <TextField
                  className="checkout__forminps--full"
                  label="Email Address"
                  variant="outlined"
                  size="small"
                />
                <TextField
                  className="checkout__forminps--full"
                  label="Street Address"
                  variant="outlined"
                  size="small"
                />
                <TextField
                  className="checkout__forminps--full"
                  variant="outlined"
                  size="small"
                />
                <TextField
                  label="State/Province"
                  variant="outlined"
                  size="small"
                />
                <TextField label="City" variant="outlined" size="small" />
                <TextField
                  label="Zip/Postal Code"
                  variant="outlined"
                  size="small"
                />
                <TextField label="Phone" variant="outlined" size="small" />
                <div className="checkout__forminps--full">
                  <div className="checkout__formcheck">
                    <input type="checkbox" />
                    <label>My billing and shipping address are the same</label>
                  </div>
                  <div className="checkout__formcheck">
                    <input type="checkbox" />
                    <label>Create an account for later use</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="checkout__shipping card">
            <h4 className="card__head">Shipping Method</h4>
            <div className="checkout__methods card__body">
              <div
                className="checkout__method checkout__method--checked"
                ref={(ele: HTMLDivElement) =>
                  (refsObj.current.shippingmethods![0] = ele)
                }
              >
                <div className="checkout__method__head">
                  <input
                    className="checkout__method__radio"
                    defaultChecked
                    type="radio"
                    name="shippigmethod"
                    // fn to toggle --checked modifier class for each element in the array
                    onChange={() => {
                      refsObj.current.shippingmethods.forEach((ele) => {
                        ele.classList.toggle("checkout__method--checked");
                      });
                    }}
                  />
                  <span className="checkout__method__label">$2.99</span>
                  <span className="checkout__method__title">
                    USPS 1st Class With Tracking
                    <br />
                    (5 - 13 days) COVID19 Delay
                  </span>
                  <span>
                    <img src={USPS} alt="USPS logo" />
                  </span>
                </div>
              </div>
              <div
                className="checkout__method"
                ref={(ele: HTMLDivElement) =>
                  (refsObj.current.shippingmethods![1] = ele)
                }
              >
                <div className="checkout__method__head">
                  <input
                    className="checkout__method__radio"
                    type="radio"
                    name="shippigmethod"
                    // fn to toggle --checked modifier class for each element in the array
                    onChange={() => {
                      refsObj.current.shippingmethods.forEach((ele) => {
                        ele.classList.toggle("checkout__method--checked");
                      });
                    }}
                  />
                  <span className="checkout__method__label">$9.00</span>
                  <span className="checkout__method__title">
                    USPS PRIORITY With Tracking
                    <br />
                    (5 - 13 days) COVID19 Delay
                  </span>
                  <span>
                    <img src={USPS} alt="USPS logo" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="checkout__payment card">
            <h4 className="card__head">Payment Method</h4>
            <div className="checkout__methods card__body">
              <div
                className="checkout__method"
                ref={(ele: HTMLDivElement) =>
                  (refsObj.current.paymentmethods![0] = ele)
                }
              >
                <div className="checkout__method__head">
                  <input
                    className="checkout__method__radio"
                    type="radio"
                    name="paymentmethod"
                    // fn to toggle --checked modifier class for each element in the array
                    onChange={() => {
                      refsObj.current.paymentmethods.forEach((ele) => {
                        ele.classList.toggle("checkout__method--checked");
                      });
                    }}
                  />
                  <span className="checkout__method__label">PayPal</span>
                  <span className="checkout__method__title">
                    You will be redirected to the PayPal website after
                    submitting your order
                  </span>
                  <span>
                    <img src={PayPal} alt="PayPal logo" />
                  </span>
                </div>
              </div>
              <div
                className="checkout__method checkout__method--checked"
                ref={(ele: HTMLDivElement) =>
                  (refsObj.current.paymentmethods![1] = ele)
                }
              >
                <div className="checkout__method__head">
                  <input
                    className="checkout__method__radio"
                    defaultChecked
                    type="radio"
                    name="paymentmethod"
                    // fn to toggle --checked modifier class for each element in the array
                    onChange={() => {
                      refsObj.current.paymentmethods.forEach((ele) => {
                        ele.classList.toggle("checkout__method--checked");
                      });
                    }}
                  />
                  <span className="checkout__method__label">
                    Pay with Credit Card
                  </span>
                  <span className="checkout__method__logos">
                    <img src={Visa} alt="Visa logo" />
                    <img src={Discover} alt="Discover logo" />
                    <img src={Maestro} alt="Maestro logo" />
                    <img src={Mastercard} alt="Mastercard logo" />
                  </span>
                </div>
                <div className="checkout__method__body">
                  <form className="checkout__form">
                    <TextField
                      label="Card Number"
                      variant="outlined"
                      size="small"
                    />
                    <TextField
                      label="Expiration date"
                      variant="outlined"
                      size="small"
                      placeholder="MM/YY"
                    />
                    <TextField
                      label="Card Security Code"
                      variant="outlined"
                      size="small"
                      type="password"
                    />
                    <span>
                      <button className="btn btn--link">What is this?</button>
                    </span>
                  </form>
                </div>
              </div>
            </div>
            <div className="card__footer">
              <img src={LockIcon} alt="secured" />
              <span>
                We protect your payment information using encryption to provide
                bank-level security.
              </span>
            </div>
          </div>
        </section>
        <section className="checkout__part checkout__part--right">
          <div
            ref={(ele) => {
              refsObj.current.orderReview = ele;
            }}
            className="checkout__orderreview card card--drop--close"
          >
            <h4 className="card__head">Order Review</h4>
            <button
              className="card__dropper btn btn--link"
              // fn to toggle --close modifier class for parent division
              onClick={() => {
                refsObj.current.orderReview!.classList.toggle(
                  "card--drop--close"
                );
              }}
            >
              <ArrowDropDownIcon />
            </button>
            <span className="card__summary">3 items</span>
            <div className="card__body">Some text to show</div>
          </div>
          <div
            ref={(ele) => {
              refsObj.current!.discount = ele;
            }}
            className="checkout__discount card card--drop--close"
          >
            <h4 className="card__head">Discount Codes</h4>
            <button
              className="card__dropper btn btn--link"
              // fn to toggle --close modifier class for parent division
              onClick={() => {
                refsObj.current.discount!.classList.toggle("card--drop--close");
              }}
            >
              <ArrowDropDownIcon />
            </button>
            <div className="card__body">Some text to show</div>
          </div>
          <div
            ref={(ele) => {
              refsObj.current!.billSummary = ele;
            }}
            className="checkout__billsummary card card--drop"
          >
            <h4 className="card__head">Billing summary</h4>
            <button
              className="card__dropper btn btn--link"
              // fn to toggle --close modifier class for parent division
              onClick={() => {
                refsObj.current.billSummary!.classList.toggle(
                  "card--drop--close"
                );
              }}
            >
              <ArrowDropDownIcon />
            </button>
            <div className="card__body">
              <ul className="billlist">
                <li className="billlist__item">
                  <span className="billlist__itemname">Subtotal</span>{" "}
                  <span className="billlist__itemvalue">$3720,27</span>
                </li>
                <li className="billlist__item">
                  <span className="billlist__itemname">Discount</span>{" "}
                  <span className="billlist__itemvalue">-$749.99</span>
                </li>
                <li className="billlist__item">
                  <span className="billlist__itemname">
                    Warranty(Platinum)
                    <button className="btn btn--link">Remove</button>
                  </span>{" "}
                  <span className="billlist__itemvalue">$259.99</span>
                </li>
                <li className="billlist__item">
                  <span className="billlist__itemname">Shipping</span>{" "}
                  <span className="billlist__itemvalue">$0.00</span>
                </li>
                <li className="billlist__item">
                  <span className="billlist__itemname">Tax</span>{" "}
                  <span className="billlist__itemvalue">$228.72</span>
                </li>
                <hr className="billlist__divider" />
                <li className="billlist__item billlist__item--last">
                  <span className="billlist__itemname">Grand Total</span>{" "}
                  <span className="billlist__itemvalue">$3,439.00</span>
                </li>
              </ul>
              <TextField
                className="checkout__forminps--full"
                label="Order Comment"
                placeholder="Type here..."
                variant="outlined"
                fullWidth
                multiline
                rows={2}
              />
              <div className="checkout__formcheck">
                <input type="checkbox" />
                <label>
                  Please check to acknowledge our{" "}
                  <a className="lnk" href="#privacy">
                    Privacy & Terms Policy
                  </a>
                </label>
              </div>
              <button className="btn btn--primary btn--cta">Pay $3,439</button>
              <div className="card__footer">
                <img src={NortonLogo} alt="Norton logo" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Checkout;