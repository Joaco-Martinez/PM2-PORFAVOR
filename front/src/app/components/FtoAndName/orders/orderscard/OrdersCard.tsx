import React from 'react';
import { IOrder } from '../../../../../../interfaces';

interface CardProps {
  order: IOrder;
}


const OrdersCard: React.FC<CardProps> = ({ order }) => {
     
    return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <p className="text-lg font-bold flex flex-row">Order number: {order.id} </p>
      <p>Status: {order.status}</p>
      <p>Date: {new Date(order.date).toLocaleDateString()}</p>
    </div>
  );
};

export default OrdersCard;

