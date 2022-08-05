import Layout from "@/layout";
export default {
  path: "/goods",
  component: Layout,
  redirect: "/goods/menu1",
  name: "Goods",
  meta: {
    title: "商品管理",
    icon: "el-icon-present",
  },
  children: [
    {
      path: "menu1",
      component: () => import("@/views/goods/menu1/index"),
      name: "Menu1",
      meta: { title: "商品类型" },
    },
    {
      path: "menu2",
      component: () => import("@/views/goods/menu2/index"),
      name: "Menu2",
      meta: { title: "商品管理" },
    },
  ],
};
