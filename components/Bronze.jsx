import React, { useState } from "react";
import { BronzeImage } from "./Images";
import { planApi } from "../functions/SubmitPlan";
export default function Bronze({ setThePlan }) {
  const [loading, setLoading] = useState(false);
  const setBronzePlan = () => {
    setLoading(true);
    //The axios request will be made here
    planApi.postRequest().then((response) => {
      setTimeout(
        () => setThePlan("Bronze"),
        2000,
        () => setLoading(false)
      );
    });
  };
  return (
    <div className="col-md-4">
      <div className="p-3 card text-center">
        <h3>Bronze</h3>
        <p className="text-secondary">From $5 a month</p>
        <div className="m-auto pt-3">
          <BronzeImage width="50%" />

          <p className="my-3">
            Store your stuff and securely access your files from anywhere. Refer
            friends to get more space
          </p>

          <button onClick={setBronzePlan} className="btn btn-primary ">
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
