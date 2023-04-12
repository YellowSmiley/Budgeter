import { useNavigate } from "react-router-dom";
import { Paths } from "../../app-router/paths";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";

import "./PageHeader.scss";

interface IProps {
  text: string;
  path?: Paths;
}

const PageHeader = ({ text, path }: IProps) => {
  const navigate = useNavigate();

  return (
    <div className="PageHeader">
      {path && (
        <button
          className="primary"
          onClick={() => {
            navigate(path);
          }}
        >
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </button>
      )}
      {text}
    </div>
  );
};

export default PageHeader;
