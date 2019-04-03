# use-axios

Simple Axios hook for React. Use React Suspense to show loading indicator and Error Boundary to show request errors.

## Install

```sh
npm install axios use-axios
```

## `useAxios(...args)`

#### Params

Same as `axios`.

#### Returns

Success response from axios.

#### Throws

Response error from axios or promise for React Suspense.

## Example

```js
import { Suspense } from "react";
import useAxios from "use-axios";

function User({ id }) {
  const { data } = useAxios(`/api/users/${id}`);

  return <div>User: {data.first_name}</div>;
}

function App() {
  return (
    <Suspense fallback="Loading...">
      <User id="1" />
    </Suspense>
  );
}
```

## Handle errors

Create an error boundary, for example using [react-error-boundary](https://github.com/bvaughn/react-error-boundary).

```js
import { Suspense } from "react";
import useAxios from "use-axios";
import ErrorBoundary from "react-error-boundary";

function MyFallbackComponent({ error, componentStack }) {
  return (
    <>
      <p>
        <strong>Oops! A request error occurred!</strong>
      </p>
      <p>
        <pre>
          status: {error.response.status}
          {"\n"}
          statusText: {error.response.statusText}
          {"\n"}
          Stacktrace:
          {componentStack}
        </pre>
      </p>
    </>
  );
}

function App() {
  return (
    <Suspense fallback="Loading...">
      <ErrorBoundary FallbackComponent={MyFallbackComponent}>
        <User id="23" />
      </ErrorBoundary>
    </Suspense>
  );
}
```

To handle error inside a component, use `try...catch`:

```js
function User() {
  try {
    const { data } = useAxios(`/api/users/${id}`);
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
        <p>
          <pre>
            status: {error.response.status}
            {"\n"}
            statusText: {error.response.statusText}
          </pre>
        </p>
      </>
    );
  }
}
```

## Caching

Successful responses with the same (stable JSON stringified) arguments will be cached across the application. Components may rerender and call `useAxios` multiple times, and only one HTTP request is made, as long as there is some component mounted using the same request arguments.

To reload data and update components, call `reload(...args)`.

### Reload example

Remove user and update list of users:

```js
import { Suspense } from "react";
import useAxios, { reload } from "use-axios";
import { delete as del } from "axios";

function Users() {
  const { data } = useAxios("/api/users");
  return (
    <ul>
      {data.map(user => (
        <User key={user.id} {...user} />
      ))}
    </ul>
  );
}

function User({ id, first_name }) {
  return (
    <li>
      {first_name}
      <span
        onClick={async () => {
          // Remove user and update list of users
          await del(`/api/users/${id}`);
          reload("/api/users");
        }}
      >
        ❌
      </span>
    </li>
  );
}

function App() {
  return (
    <Suspense fallback="Loading...">
      <Users />
    </Suspense>
  );
}
```
