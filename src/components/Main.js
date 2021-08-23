import React from "react";
import { setInputTitle, setInputAmount, setInputNote, setInputDate, setReset } from "../Redux/Action/index"
//  "./Action/index";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "../App.css";


const Main = () => {


  const Dispatch = useDispatch();
  const title = useSelector(state => state.title);
  const amount = useSelector(state => state.amount);
  const note = useSelector(state => state.note);
  const date = useSelector(state => state.date);
  let State = useSelector(state => state);
  const [x, y] = useState([State]);

  function addTitle() {
    if (!title) {

    }
    else {
      y([...x, State]);
      Dispatch(setReset());
    }
    return
  }
  return (
    <>
      <center>
        <br /><br />

        <input type='text' placeholder="Title "
          value={title}
          onChange={(e) =>
            Dispatch(setInputTitle(e.target.value))
          } />
        <br />
        <input type="number" placeholder="AMOUNT "
          value={amount}
          onChange={(e) =>
            Dispatch(setInputAmount(e.target.value))
          } />
        <br />
        <input type="text" placeholder="Note "
          value={note}
          onChange={(e) =>
            Dispatch(setInputNote(e.target.value))
          } />
        <br />
        <input type="Date" placeholder="Date "
          value={date}
          onChange={(e) =>
            Dispatch(setInputDate(e.target.value))
          } />
        <br />
        <button onClick={addTitle}><h2>ADD EXPENSES </h2></button>
      </center>
      <div >

        {

          x.map((e, i) => {

            return (
              <div className="container" key={i}>
                {e.date}
                <h5>   {e.title} </h5>
                <h5>  note :{e.note}     </h5>
                <h1 > 	₹	{e.amount}</h1>
              </div>

            )
          })}
      </div>
    </>
  );
}
export default Main;
