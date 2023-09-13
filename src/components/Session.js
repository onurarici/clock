import { useSelector, useDispatch } from "react-redux";
import { sessionActions } from "../store/session-slice";
import { secondsActions } from "../store/seconds-slice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Session() {
  const sessionCount = useSelector((state) => state.sessionMinute.sessionCount);
  let secondsCount = useSelector((state) => state.seconds.secondsCount);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Session Time</h3>
      <FontAwesomeIcon
        id="down"
        onClick={() => {
          dispatch(secondsActions.reset());
          sessionCount > 1 ? dispatch(sessionActions.decrement()) : null;
        }}
        // onClick={() => dispatch(secondsActions.reset())}
        icon={faArrowDown}
      />
      <span>{sessionCount}</span>
      <FontAwesomeIcon
        id="up"
        onClick={() => {
          sessionCount < 60 ? dispatch(sessionActions.increment()) : null;
          dispatch(secondsActions.reset());
        }}
        // onChange={dispatch(secondsActions.reset())}
        icon={faArrowUp}
      />
    </div>
  );
}
