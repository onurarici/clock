import { useSelector, useDispatch } from "react-redux";
import { sessionActions } from "../store/session-slice";
import { secondsActions } from "../store/seconds-slice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRotate } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Clock() {
  let clockCount = useSelector((state) => state.sessionMinute.sessionCount);
  let secondsCount = useSelector((state) => state.seconds.secondsCount);

  const dispatch = useDispatch();
  // let [second, setSecond] = useState(secondsCount);

  // console.log(secondsCount);

  function countdown() {
    let sessAct = sessionActions;
    dispatch(secondsActions.decrement());

    if (secondsCount == 0) {
      dispatch(sessAct.decrement());
    }
  }

  return (
    <div>
      <h4>Clock</h4>
      <span>{clockCount}</span>
      <span>:</span>
      <span>
        {secondsCount.toString().length === 2 ? (
          <>{secondsCount}</>
        ) : (
          <>0{secondsCount}</>
        )}
      </span>
      <br />
      <br />
      <span className="displayButtons">
        <FontAwesomeIcon icon={faPlay} />
        <FontAwesomeIcon icon={faPause} />
        <FontAwesomeIcon icon={faRotate} />
      </span>

      <button
        onClick={countdown}
        // onClick={() => dispatch(secondsActions.decrement())}
      >
        Decrease
      </button>
    </div>
  );
}
