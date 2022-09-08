import React from "react";

// components

import CardEditFee from "components/Cards/Cardedit_fee";
import CardFee_details from "components/Cards/CardFee_details";


// layout for page

import Admin from "layouts/Admin.js";

export default function edit_fee() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
          <CardEditFee />
        </div>
        <div className="w-full xl:w-6/12 px-4">
          <CardFee_details />
        </div>
      </div>
    </>
  );
}

edit_fee.layout = Admin;
