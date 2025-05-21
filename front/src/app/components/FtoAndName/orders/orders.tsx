import { IUser, IOrder } from "../../../../../interfaces"
import OrdersCard from "./orderscard/OrdersCard"
import NoOrders from "../../NoOrders/NoOrders"
interface Props {
    user: IUser
    orders: IOrder[]
}

function Orders({ orders }: Props) {
    if (orders.length === 0) {
        return (
            <div className="flex items-center justify-center min-h-[200px] w-full">
                <NoOrders />
            </div>
        );
    }

    return (
        <div className="mt-6 grid grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-4">
            {orders.map((order: IOrder) => (
                <OrdersCard key={order.id} order={order} />
            ))}
        </div>
    );
}

export default Orders