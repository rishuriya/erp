import React, { useState } from "react";
import { app, database, } from "../../pages/firebase.js";
import { collection, addDoc,doc,setDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
const Modal = () => {
  let date_ob = new Date();
  let year = date_ob.getFullYear();
  const [showModal, setShowModal] = useState(false);
  const [Class,setClass]=useState(null);
  const [Section,setSection]=useState(null);
  let router = useRouter()
  //const dbInstance=doc(database,"Session",year,"student",year+Class);
const saveNote = async () => {
  
  await setDoc(doc(database,"Session",year.toString(),"class",Class), {
  Class:Class,
  Total_Section:Section
})
    setClass(null)
setSection(null)
setShowModal(false)
router.push('/admin/add_class')

}
  return (
    <>
      <button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 justify-right items-right"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Fill Details
      </button>
      {showModal ? (
        <>
          <div className="flex justify-right items-right overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-full">
            <div className="relative w-6/12 mx-auto max-w-xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl text-blueGray-700 font=semibold">Fee Head</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Class Name
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="" onChange={event => setClass(event.target.value)} value={Class}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Total Section
                  </label>
                  <input
                    type="integer"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="" onChange={event => setSection(event.target.value)} value={Section}
                  />
                </div>
              </div>
            </div>
          
        </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={saveNote}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;