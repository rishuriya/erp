import React from "react";

// components

import CardFee_head from "components/Cards/CardFee_head";

// layout for page

import Admin from "layouts/Admin.js";

export default function Fee_head() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardFee_head color="dark"/>
        </div>
      </div>
    </>
  );
}

Fee_head.layout = Admin;
