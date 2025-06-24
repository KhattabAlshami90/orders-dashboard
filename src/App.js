import React from "react";
import { useTranslation } from "react-i18next";
import OrdersPage from "./pages/OrdersPage";
import LanguageSwitcher from "./components/LanguageSwitcher";

function App() {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto p-6">
      <LanguageSwitcher />
      <h1 className="text-3xl font-bold mb-4 text-center">
        {t("trackMessage")}
      </h1>
      <OrdersPage />
    </div>
  );
}

export default App;
