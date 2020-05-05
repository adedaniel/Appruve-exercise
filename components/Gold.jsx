import React, { useState } from "react";
import { GoldImage } from "./Images";
import { planApi } from "../functions/SubmitPlan";

export default function Gold({ setThePlan }) {
  const [loading, setLoading] = useState(false);
  const setGoldPlan = () => {
    setLoading(true);
    //The axios request will be made here
    planApi.postRequest().then((response) => {
      setTimeout(
        () => setThePlan("Gold"),
        2000,
        () => setLoading(false)
      );
    });
  };
  return (
    <div className="col-md-4">
      <div className="p-3 card text-center">
        <h3>Gold</h3>
        <p className="text-secondary">From $50 a month</p>
        <div className="m-auto pt-3">
          <GoldImage width="50%" />

          <p className="my-3">
            Get as much space as you need, with powerful admin features and
            unlimited version history
          </p>

          <button onClick={setGoldPlan} className="btn btn-primary ">
            {loading === true && (
              <>
                <div
                  className="spinner-border spinner-border-sm text-light text-primary"
                  role="status"
                >
                  <span className="sr-only">Loading...</span>
                </div>
                &nbsp; &nbsp;
              </>
            )}
            Buy
          </button>
        </div>
      </div>
      <style jsx>{`
        .card {
          border: 1px solid lightgrey;
          border-radius: 5px;
        }
        .btn {
          width: 200px;
        }
      `}</style>
    </div>
  );
}
