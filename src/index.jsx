import React from "react";
import ReactDOMClient from "react-dom/client";
import { UserSignUp } from "./screens/UserSignUp";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<UserSignUp />);
