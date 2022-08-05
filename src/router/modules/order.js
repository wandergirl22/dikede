import Layout from "@/layout";
export default {
  path: "/order",
  component: Layout,
  children: [
    {
      path: "",
      component: () => import("@/views/order/index"),
      name: "Order",
      meta: { title: "订单管理", icon: "el-icon-document-copy" },
    },
  ],
};
