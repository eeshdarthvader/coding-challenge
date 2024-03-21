import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router
} from 'react-router-dom'
import App from "./App";
import "./main.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
