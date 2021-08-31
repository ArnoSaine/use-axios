import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('add items', async () => {
  async function addTodo(title) {
    await waitFor(() =>
      expect(getByPlaceholderText('What needs to be done?')).toBeInTheDocument()
    );
    userEvent.type(
      getByPlaceholderText('What needs to be done?'),
      `${title}{enter}`
    );
    await waitFor(() => expect(getByText(title)).toBeInTheDocument());
  }

  const { getByPlaceholderText, getByText } = render(<App />);
  await waitFor(() => expect(getByText('loading...')).toBeInTheDocument());

  await addTodo('start up');
  await addTodo('cash in');
  await addTodo('sell out');
  await addTodo('bro down');

  await waitFor(() => expect(getByText('bro down')).toBeInTheDocument());
  expect(getByText('4 items left')).toBeInTheDocument();
});

test('set all completed', async () => {
  const { getByTestId, getByText } = render(<App />);

  userEvent.click(getByTestId('toggle-all'));
  await waitFor(() => expect(getByText('0 items left')).toBeInTheDocument());
});

test('clear completed', async () => {
  const { getByText, queryByText } = render(<App />);

  userEvent.click(getByText('Clear completed (4)'));
  await waitFor(() => expect(queryByText('bro down')).not.toBeInTheDocument());
});
