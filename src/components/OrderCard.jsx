import React from 'react';
import { useTranslation } from 'react-i18next';

export default function OrderCard({ order }) {
  const { t } = useTranslation();

  const statusLabels = {
    "delivered": "✅ Delivered",
    "on-the-way": "🚚 On the Way",
    "order-info-received": "ℹ️ Info Received",
  };

  const statusDisplay = statusLabels[order.status] || '⏳ Processing';

  return (
    <div className="p-6 bg-white rounded-3xl shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <h2 className="text-xl font-semibold mb-4 text-gray-900">
        Order ID: {order.id}
      </h2>
      <p className="inline-flex items-center px-4 py-2 rounded-full font-semibold mb-5 bg-gray-100 text-gray-800">
        {t('status')}: {statusDisplay}
      </p>
      <p className="flex items-center mb-3 text-gray-700">
        <span className="mr-2">⏰</span>
        <strong>{t('eta')}:</strong> {new Date(order.eta).toLocaleString()}
      </p>
      <p className="flex items-center text-gray-700">
        <span className="mr-2">📍</span>
        <strong>{t('pickup')}:</strong> {order.location_name}
      </p>
    </div>
  );
}
