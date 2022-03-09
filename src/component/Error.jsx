import React from "react";

function Error({ children }) {
  return (
    <div>
      <p className="text-sm text-green-800 font-bold capitalize -pt-5 pb-2">{children}</p>
    </div>
  );
}

export default Error;
