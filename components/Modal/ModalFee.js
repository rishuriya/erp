import { useEffect, useState,useRef } from "react";
import { app, database, } from "../../pages/firebase.js";
import { collection, query, where,updateDoc, getDocs,addDoc,doc,setDoc, getDoc } from 'firebase/firestore';

const Modal = () => {
  let date_ob = new Date();
  let year = date_ob.getFullYear();
  const [showModal, setShowModal] = useState(false);
  const [headName,setheadName]=useState('');
  const [headAmount,setheadAmount]=useState("");
  const [classData,setclassData]=useState();
  const [feePeriod,setfeePeriod]=useState('');
  const [fireData, setFireData] = useState([]);
  const q = collection(database, "Session","2022","class");
  useEffect(() => {
      getData()
  }, [])

  const getData = async () => {
    await getDocs(q)
      .then((response) => {
        setFireData(response.docs.map((data) => {
          return { ...data.data(), id: data.id }
        }))
      });
    }
  const saveNote = async (e) => {
    e.preventDefault()
    classData = [...classRef.current.options]
                .filter(option => option.selected)
                .map(option => option.value)
    for (let index = 0; index < classData.length; index++) {
    //let  type=headName+"_period"
    
    await setDoc(doc(database,"Session",year.toString(),"Fee",classData[index],"Fee",headName), {
      Class:classData[index],
      Name:headName,
      Amount:headAmount,
      Period:feePeriod
  })
  let total_amt=0
  await updateDoc(doc(database,"Session",year.toString(),"Fee",classData[index]), {
    Total_amt:total_amt
})
    }
    //alert("data sent")
    setclassData(null)
setheadName("")
setfeePeriod("")
setheadAmount("")
setShowModal(false)
  }

  const classRef = useRef()

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
                    Head Name
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="lucky.jesse" onChange={event => setheadName(event.target.value)} value={headName}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Amount
                  </label>
                  <input
                    type="integer"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="0" onChange={event => setheadAmount(event.target.value)} value={headAmount}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                <label for="Period" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Choose Class:</label>

                  <select id="Class" name="Class" size="4" multiple 
                ref={classRef} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                  {fireData.map((data) => {
                    return (
                    <option value={data.Class}>{data.Class}</option>
                            )
                  })}
                  </select>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                <label for="Period" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Choose Period:</label>

                  <select id="Period" name="Period" size="4"
                   onChange={event => setfeePeriod(event.target.value)} value={feePeriod} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                    <option value="monthly">Monthly</option>
                    <option value="periodic">Periodic</option>
                    <option value="biannual">Biannual</option>
                    <option value="annual">Annual</option>
                    <option value="late">Late</option>
                  </select>
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