import React from "react";
import { BronzeImage, SilverImage, GoldImage } from "./Images";

export default function SuccessMessage({ plan }) {
  return (
    <div className="pt-5">
      <h1 className="mb-3 text-success">Success!</h1>
      <div className="container">
        <div className=" text-center">
          <div>
            <h3 className="text-center centered">
              You have successfully subscribed to the {plan} plan
            </h3>
          </div>
          <div className=" mt-5">
            {plan === "Bronze" && <BronzeImage />}
            {plan === "Silver" && <SilverImage />}
            {plan === "Gold" && <GoldImage />}
          </div>
        </div>
      </div>

      <style jsx>{`
        .centered {
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}
