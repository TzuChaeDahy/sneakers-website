import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return <div>{error.data}</div>;
}

export default ErrorPage;
