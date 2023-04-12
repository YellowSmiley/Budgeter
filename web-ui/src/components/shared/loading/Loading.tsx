import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <FontAwesomeIcon icon={faSpinner} spin />
    </div>
  );
};

export default Loading;
