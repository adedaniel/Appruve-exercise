import React, { useState } from "react";

import Bronze from "../components/Bronze";
import Silver from "../components/Silver";
import Gold from "../components/Gold";
import SuccessMessage from "../components/SuccessMessage";
export default function Home() {
  const [plan, setPlan] = useState(null);

  const setThePlan = (newPlan) => {
    console.log(newPlan);
    setPlan(newPlan);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10 text-center pt-5">
          <div className="mt-5">
            {plan ? (
              <SuccessMessage plan={plan} />
            ) : (
              <>
                <h1 className="mb-5">Choose your Pricing plan</h1>
                <div className="container">
                  <div className="row">
                    <Bronze setThePlan={setThePlan} />
                    <Silver setThePlan={setThePlan} />
                    <Gold setThePlan={setThePlan} />
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
}
