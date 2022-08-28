import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const containerStyle = {
    // width : "60%",
    display :  "flex",
    justifyContent : "space-between",
    // border:"2px solid red",
    borderRadius: 10,
    backgroundColor : "#f7f7f7",
    padding : 10,
    marginBottom:'7px'
    
}

const dropDownItemStyle = {
    border:"2px solid red",
    width: "30%" 

}



const SearchBar = () => {
    const [text,setText] = useState('Location');
    const [text2,setText2] = useState('Slots');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
      };
    let seatsAvailable = 44;
    
    
    return (
            <>
            <div className="container" style={containerStyle}>
                {/* Location */}
                <div className="input-group" style={containerStyle}>
                    <input type="text" value={text} className="form-control" 
                        aria-label="Text input with dropdown button"/>
                        
                  
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary dropdown-toggle" 
                        type="button" data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false"></button>

                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#" onClick={()=>setText("Gurugram")}>Gurugram</a>
                            <a class="dropdown-item" href="#" onClick={()=>setText("Noida")}>Noida</a>
                            <a class="dropdown-item" href="#" onClick={()=>setText("Hyderabad")}>Hyderabad</a>
                            <a class="dropdown-item" href="#" onClick={()=>setText("Bengaluru")}>Bengaluru</a>
                            
                        </div>
                    </div>

                 
                </div>
                {/* date */}
                <div className="input-group" style={containerStyle}>
                    <div className="container">
                    <DatePicker
                            selected={startDate}
                            onChange={onChange}
                            startDate={startDate}
                            endDate={endDate}
                            selectsRange
                            inline
                            />
                    </div>
                </div>
                {/* Slots */}
                <div className="input-group" style={containerStyle}>
                    <input type="text" value={text2} className="form-control" 
                        aria-label="Text input with dropdown button" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary dropdown-toggle"  
                        type="button" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false"></button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#" onClick={()=>setText2("Slot 1")}>Slot 1</a>
                            <a class="dropdown-item" href="#" onClick={()=>setText2("Slot 2")}>Slot 2</a>
                            
                        </div>
                    </div>
                </div>
            
                <div className="btn btn-primary" type="button" style={{width:'20%'}}>Search</div>
                
            </div>

            {/* seat status renders with search results */}
            <div className="container" style={containerStyle}>
                <div className="container"> <p> Seats available:</p> <strong>{seatsAvailable}</strong></div>
            <div className="btn btn-primary" type="button" onClick="submit" style={{alignSelf:"flex-end"}}>Book Seat</div>
            </div>
            </>
        );
    
};

export default SearchBar;

// style={{border:"2px solid red"}}