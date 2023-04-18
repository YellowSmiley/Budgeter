import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledLoading } from "./StyledLoading";

const Loading = () => (
  <StyledLoading>
    <FontAwesomeIcon icon={faSpinner} spin />
  </StyledLoading>
);

export default Loading;
