import { Suspense } from 'react';
import useAxios, { reload } from 'use-axios';
import { delete as del } from 'axios';
import ErrorBoundary from 'react-error-boundary';

function User({ id }) {
  const url = `https://reqres.in/api/users/${id}`;
  const { data } = useAxios(url);

  return (
    <div>
      User: {data.data.first_name}
      <span
        onClick={async () => {
          await del(url);
          reload(url);
        }}
      >
        ❌
      </span>
    </div>
  );
}

function UserHandleError({ id }) {
  try {
    const url = `https://reqres.in/api/users/${id}`;
    const { data } = useAxios(url);
    return <div>User: {data.first_name}</div>;
  } catch (error) {
    // If error is a promise, rethrow it for React Suspense
    if (Promise.resolve(error) === error) {
      throw error;
    }
    return (
      <>
        <p>
          <strong>Oops! A request error occurred!</strong>
        </p>
        <pre>
          status: {error.response.status}
          {'\n'}
          statusText: {error.response.statusText}
        </pre>
      </>
    );
  }
}

function MyFallbackComponent({ error, componentStack }) {
  return (
    <>
      <p>
        <strong>Oops! A request error occurred!</strong>
      </p>
      <pre>
        status: {error.response.status}
        {'\n'}
        statusText: {error.response.statusText}
        {'\n'}
        Stacktrace:
        {componentStack}
      </pre>
    </>
  );
}

function App() {
  return (
    <Suspense fallback="Loading...">
      <User id="1" />
      <User id="1" />
      <User id="2" />
      <ErrorBoundary FallbackComponent={MyFallbackComponent}>
        <User id="23" />
      </ErrorBoundary>
      <UserHandleError id="23" />
    </Suspense>
  );
}

export default App;
