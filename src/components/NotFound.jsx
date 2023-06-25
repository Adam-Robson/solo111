import { useRouteError } from 'react-router-dom';

export default function NotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>no!</h1>
      <p>Sorry, there has been an unexpected error.</p>
      <pre>
        {error.statusText || error.message}
      </pre>
    </div>
  );
}