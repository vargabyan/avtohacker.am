import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LANGUAGE_AN from "./language_AM";
import Error from "./language_AM/error";
import LANGUAGE_EN from "./language_EN";
import LANGUAGE_RU from "./language_RU";

function App() {
  const definedLanguage =
    navigator.language === "am"
      ? "/am"
      : navigator.language === "ru"
      ? "/ru"
      : "/en";
  let language = localStorage.getItem("check-language")
    ? localStorage.getItem("check-language")
    : definedLanguage;

  if (!localStorage.getItem("check-language")) {
    localStorage.setItem("check-language", document.location.pathname);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={`${language}`} />} />
        <Route path="am/*" element={<LANGUAGE_AN />} />
        <Route path="en/*" element={<LANGUAGE_EN />} />
        <Route path="ru/*" element={<LANGUAGE_RU />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
