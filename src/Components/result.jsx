import React from 'react';
import { Link } from "react-router-dom";

const Result = ({total,name}) => {
  return (
    <>
      <div className="container">
        <div className="wrapper" style={{width:'auto'}}>
          <div className="title"><span>Result</span></div>
          <form action="#">
            <div className="row">
              <input type="text" value={`${name} have got ${total} marks out of 10`} disabled style={{ paddingLeft: '5px',wordBreak:'break-word'}}/>
            </div>
            <div className="row button">
              <Link to={'/'}>
                <input type="submit" value="Again Quiz" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Result;