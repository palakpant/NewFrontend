import React from "react";
import { useEffect,useState } from "react";
import SearchBar from "../SearchBar";
import UserService from "/Users/ppant9/Desktop/SeatBookingApp-main/src/services/user_service.js";

const Bangalore=() =>{
   // const [value, setValue] = useState("");
  //   const [dateOfTransaction, setdateOfTransaction] = useState("");
  // const [slotTime, setSlotTime] = useState("");
  // const onChangeDate = (e) => {
  //   const dateOfTransaction = e.target.value;
  //   setdateOfTransaction(dateOfTransaction);
  // };
  // const onChangeSlotTime = (e) => {
  //   const slotTime = e.target.value;
  //   setSlotTime(slotTime);
  // };
  //   useEffect(() => {
  //     UserService.getBangaloreDetail().then(
  //       (response) => {
  //           console.log(response);
  //         setValue(response.data);
  //       },
  //       (error) => {
  //           console.log(error);
  //         const _value =
  //           (error.response &&
  //             error.response.data &&
  //             error.response.data.message) ||
  //           error.message ||
  //           error.toString();
  //         setValue(_value);
  //       }
  //     );
  //   }, []);

   

    return (
        <div className="container">
           
             <SearchBar/>
            
          
        </div>
          
       
       );


}
export default Bangalore;
