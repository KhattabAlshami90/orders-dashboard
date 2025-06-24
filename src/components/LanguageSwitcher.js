import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex justify-end space-x-4 mb-4">
      <button
        onClick={() => changeLanguage("en")}
        className="px-3 py-1 border rounded hover:bg-gray-200"
      >
        English
      </button>
      <button
        onClick={() => changeLanguage("sv")}
        className="px-3 py-1 border rounded hover:bg-gray-200"
      >
        Svenska
      </button>
    </div>
  );
}
