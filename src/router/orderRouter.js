// 订单路由配置
import Home from '../views/Home';
import orderXdOrderList from '../views/order/XdOrderList';

const orderRouter = {
  path: '/',
  component: Home,
  name: 'orderSystem',
  iconCls: 'fa fa-id-card-o',
  children: [
    { path: '/order/orderList', component: orderXdOrderList, name: 'orderXdOrderList', meta: { requiresAuth: true, title: '信贷订单列表' } },
  ],
};

export default orderRouter;
