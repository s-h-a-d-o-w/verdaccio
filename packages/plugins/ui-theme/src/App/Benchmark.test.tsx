import React from 'react';

import '@testing-library/jest-dom';

import {
  renderWithStore,
  fireEvent,
  waitFor,
  screen,
} from 'verdaccio-ui/utils/test-react-testing-library';

import App from './App';
import { store } from './mock-data/store';

// 1 test
// real    0m4,159s

// 1000 tests
// real    0m59,371s

describe('benchmark', () => {
  it('opens and closes a dialog successfully', async () => {
    renderWithStore(<App />, store);

    const loginBtn = await screen.findByTestId('header--button-login');
    fireEvent.click(loginBtn);
    const loginDialog = await screen.findByTestId('login--dialog');
    expect(loginDialog).toBeDefined();

    const closeLoginBtn = await screen.findByTestId('close-login-dialog-button');
    fireEvent.click(closeLoginBtn);
    await waitFor(() => {
      expect(loginDialog).not.toBeInTheDocument();
    });
  });

  it('opens and closes a dialog successfully', async () => {
    renderWithStore(<App />, store);

    const loginBtn = await screen.findByTestId('header--button-login');
    fireEvent.click(loginBtn);
    const loginDialog = await screen.findByTestId('login--dialog');
    expect(loginDialog).toBeDefined();

    const closeLoginBtn = await screen.findByTestId('close-login-dialog-button');
    fireEvent.click(closeLoginBtn);
    await waitFor(() => {
      expect(loginDialog).not.toBeInTheDocument();
    });
  });

  it('opens and closes a dialog successfully', async () => {
    renderWithStore(<App />, store);

    const loginBtn = await screen.findByTestId('header--button-login');
    fireEvent.click(loginBtn);
    const loginDialog = await screen.findByTestId('login--dialog');
    expect(loginDialog).toBeDefined();

    const closeLoginBtn = await screen.findByTestId('close-login-dialog-button');
    fireEvent.click(closeLoginBtn);
    await waitFor(() => {
      expect(loginDialog).not.toBeInTheDocument();
    });
  });

  it('opens and closes a dialog successfully', async () => {
    renderWithStore(<App />, store);

    const loginBtn = await screen.findByTestId('header--button-login');
    fireEvent.click(loginBtn);
    const loginDialog = await screen.findByTestId('login--dialog');
    expect(loginDialog).toBeDefined();

    const closeLoginBtn = await screen.findByTestId('close-login-dialog-button');
    fireEvent.click(closeLoginBtn);
    await waitFor(() => {
      expect(loginDialog).not.toBeInTheDocument();
    });
  });

  it('opens and closes a dialog successfully', async () => {
    renderWithStore(<App />, store);

    const loginBtn = await screen.findByTestId('header--button-login');
    fireEvent.click(loginBtn);
    const loginDialog = await screen.findByTestId('login--dialog');
    expect(loginDialog).toBeDefined();

    const closeLoginBtn = await screen.findByTestId('close-login-dialog-button');
    fireEvent.click(closeLoginBtn);
    await waitFor(() => {
      expect(loginDialog).not.toBeInTheDocument();
    });
  });

  it('opens and closes a dialog successfully', async () => {
    renderWithStore(<App />, store);

    const loginBtn = await screen.findByTestId('header--button-login');
    fireEvent.click(loginBtn);
    const loginDialog = await screen.findByTestId('login--dialog');
    expect(loginDialog).toBeDefined();

    const closeLoginBtn = await screen.findByTestId('close-login-dialog-button');
    fireEvent.click(closeLoginBtn);
    await waitFor(() => {
      expect(loginDialog).not.toBeInTheDocument();
    });
  });

  it('opens and closes a dialog successfully', async () => {
    renderWithStore(<App />, store);

    const loginBtn = await screen.findByTestId('header--button-login');
    fireEvent.click(loginBtn);
    const loginDialog = await screen.findByTestId('login--dialog');
    expect(loginDialog).toBeDefined();

    const closeLoginBtn = await screen.findByTestId('close-login-dialog-button');
    fireEvent.click(closeLoginBtn);
    await waitFor(() => {
      expect(loginDialog).not.toBeInTheDocument();
    });
  });

  it('opens and closes a dialog successfully', async () => {
    renderWithStore(<App />, store);

    const loginBtn = await screen.findByTestId('header--button-login');
    fireEvent.click(loginBtn);
    const loginDialog = await screen.findByTestId('login--dialog');
    expect(loginDialog).toBeDefined();

    const closeLoginBtn = await screen.findByTestId('close-login-dialog-button');
    fireEvent.click(closeLoginBtn);
    await waitFor(() => {
      expect(loginDialog).not.toBeInTheDocument();
    });
  });

  it('opens and closes a dialog successfully', async () => {
    renderWithStore(<App />, store);

    const loginBtn = await screen.findByTestId('header--button-login');
    fireEvent.click(loginBtn);
    const loginDialog = await screen.findByTestId('login--dialog');
    expect(loginDialog).toBeDefined();

    const closeLoginBtn = await screen.findByTestId('close-login-dialog-button');
    fireEvent.click(closeLoginBtn);
    await waitFor(() => {
      expect(loginDialog).not.toBeInTheDocument();
    });
  });

  it('opens and closes a dialog successfully', async () => {
    renderWithStore(<App />, store);

    const loginBtn = await screen.findByTestId('header--button-login');
    fireEvent.click(loginBtn);
    const loginDialog = await screen.findByTestId('login--dialog');
    expect(loginDialog).toBeDefined();

    const closeLoginBtn = await screen.findByTestId('close-login-dialog-button');
    fireEvent.click(closeLoginBtn);
    await waitFor(() => {
      expect(loginDialog).not.toBeInTheDocument();
    });
  });
});
