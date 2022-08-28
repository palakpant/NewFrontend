import React, { useState, useEffect } from "react";
import UserService from "../services/user_service";
import Logo1 from "./images/optum-1.jpeg"
import Logo2 from "./images/optum-2.jpeg"
import Logo3 from "./images/optum-3.jpeg"
import Logo4 from "./images/optum-4.jpeg"
import BoardUserSub from "./BoardUserSub";
import SearchBar from "./SearchBar";
const BoardUser = () => {
  const [content, setContent] = useState("");
  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setContent(_content);
      }
    );
  }, []);
  return (
   <div>
    <BoardUserSub/>
     
   </div>
     
  
  );
};
export default BoardUser;