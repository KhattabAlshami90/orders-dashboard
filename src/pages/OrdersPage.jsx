import React, { useState, useEffect } from "react";
import { getOrders } from "../services/api";
import OrderCard from "../components/OrderCard";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    getOrders()
      .then((data) => {
        console.log("API status values:", data.map((o) => o.status));
        setOrders(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
        setLoading(false);
      });
  }, []);

  const filterOptions = [
    { label: "All Orders", value: "all" },
    { label: "Delivered", value: "delivered" },
    { label: "On the Way", value: "on-the-way" },
    { label: "Info Received", value: "order-info-received" },
  ];

  const filteredOrders =
    filter === "all"
      ? orders
      : orders.filter((order) => order.status === filter);

  return (
    <div>
      <div className="flex justify-center mb-8 space-x-4">
        {filterOptions.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setFilter(value)}
            className={`px-4 py-2 rounded-full font-semibold ${
              filter === value
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-purple-500 hover:text-white transition`}
          >
            {label}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-center text-gray-600">Loading orders...</p>
      ) : filteredOrders.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOrders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No orders found.</p>
      )}
    </div>
  );
}
