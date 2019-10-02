# use-axios

Simple Axios hook for React. Use React Suspense to show loading indicator and Error Boundary to show request errors.

> **Note** - This is a React hook for data fetching inside a function component body. Use `axios` for requests in `onSubmit`, `onClick` etc.

## Install

```sh
npm install axios use-axios
```

## `useAxios`

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
      <pre>
        status: {error.response.status}
        {"\n"}
        statusText: {error.response.statusText}
        {"\n"}
        Stacktrace:
        {componentStack}
      </pre>
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

To handle error inside a component, use `useAxiosSafe`:

```js
import { useAxiosSafe } from "use-axios";

function User({ id }) {
  const [error, { data }] = useAxiosSafe(`/api/users/${id}`);
  if (error) {
    return (
      <>
        <p>
          <strong>Oops! A request error occurred!</strong>
        </p>
        <pre>
          status: {error.response.status}
          {"\n"}
          statusText: {error.response.statusText}
        </pre>
      </>
    );
  }
  return <div>User: {data.first_name}</div>;
}
```

## Caching

Successful responses with the same (stable JSON stringified) arguments will be cached across the application. Components may rerender and call `useAxios` multiple times, and only one HTTP request is made, as long as there is some component mounted using the same arguments.

To refetch data and update components, call `refetch(...args)`.

### Refetch example

Remove user and update list of users:

```js
import { Suspense } from "react";
import useAxios, { refetch } from "use-axios";
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
          refetch("/api/users");
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
