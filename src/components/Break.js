import { useSelector, useDispatch } from "react-redux";
import { breakActions } from "../store/break-slice";
// import { decrement, increment } from "../store/break-slice";

// import store from "../store/store";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Break() {
  // const breakMinute = useSelector((state) => state.breakMinute.count);
  const breakCount = useSelector((state) => state.breakMinute.breakCount);

  // console.log(breakMinute);

  const dispatch = useDispatch();

  return (
    <div>
      <h3>Break Time</h3>
      <FontAwesomeIcon
        id="down"
        onClick={() =>
          breakCount > 0 ? dispatch(breakActions.decrement()) : null
        }
        icon={faArrowDown}
      />
      <span>{breakCount}</span>
      <FontAwesomeIcon
        id="up"
        onClick={() =>
          breakCount < 60 ? dispatch(breakActions.increment()) : null
        }
        icon={faArrowUp}
      />
    </div>
  );
}
