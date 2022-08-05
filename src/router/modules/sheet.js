import Layout from "@/layout";
export default {
  path: "/sheet",
  component: Layout,
  redirect: "/sheet/menu1",
  name: "Sheet",
  meta: { title: "工单管理", icon: "el-icon-s-order" },
  children: [
    {
      path: "menu1",
      name: "Menu1",
      component: () => import("@/views/sheet/menu1/index"),
      meta: { title: "运营工单" },
    },
    {
      path: "menu2",
      name: "Menu2",
      component: () => import("@/views/sheet/menu2/index"),
      meta: { title: "运维工单" },
    },
  ],
};
