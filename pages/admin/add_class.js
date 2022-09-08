import React from "react";

// components

import CardAdd_class from "components/Cards/CardAdd_class";

// layout for page

import Admin from "layouts/Admin.js";

export default function Add_Class() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardAdd_class color="dark"/>
        </div>
      </div>
    </>
  );
}

Add_Class.layout = Admin;
