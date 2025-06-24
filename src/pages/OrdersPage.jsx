// src/pages/OrdersPage.jsx
import React, { useState, useEffect } from 'react';
import OrderCard from '../components/OrderCard';
import { useTranslation } from 'react-i18next';

const OrdersPage = () => {
  const { t } = useTranslation();
  const [orders, setOrders] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('');

  useEffect(() => {
    fetch('https://my.api.mockaroo.com/orders.json?key=e49e6840')
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  const filteredOrders = selectedStatus
    ? orders.filter((order) => order.status === selectedStatus)
    : orders;

  const statuses = [
    { label: t('allOrders'), value: '' },
    { label: t('delivered'), value: 'delivered' },
    { label: t('onTheWay'), value: 'on-the-way' },
    { label: t('infoReceived'), value: 'order-info-received' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-4">
          {t('ordersTitle')}
        </h1>
        <p className="text-center text-gray-600 text-lg mb-6">
          {t('trackMessage')}
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {statuses.map((status) => (
            <button
              key={status.value}
              onClick={() => setSelectedStatus(status.value)}
              className={`px-5 py-2 rounded-full border font-medium transition-all duration-300 text-sm md:text-base ${
                selectedStatus === status.value
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                  : 'bg-white text-blue-600 border-blue-300 hover:bg-blue-50'
              }`}
            >
              {status.label}
            </button>
          ))}
        </div>

        {filteredOrders.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No orders found.</p>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredOrders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
