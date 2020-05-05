import React, { useState } from "react";
import { SilverImage } from "./Images";

export default function Silver({ setThePlan }) {
  const [loading, setLoading] = useState(false);
  const setSilverPlan = () => {
    setLoading(true);
    setTimeout(
      () => setThePlan("Silver"),
      10,
      () => setLoading(false)
    );
  };
  return (
    <div className="col-md-4">
      <div className="p-3 card text-center">
        <h3>Silver</h3>
        <p className="text-secondary">From $15 a month</p>
        <div className="m-auto pt-3">
          <SilverImage width="50%" />

          <p className="my-3">
            Great for personal projects, with enough space for all your docs,
            files and over 20,000 photos
          </p>

          <button onClick={setSilverPlan} className="btn btn-primary ">
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
