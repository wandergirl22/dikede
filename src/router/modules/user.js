import Layout from "@/layout";
export default {
  path: "/user",
  component: Layout,
  redirect: "/user/menu1",
  name: "User",
  meta: {
    title: "人员管理",
    icon: "el-icon-s-custom",
  },
  children: [
    {
      path: "menu1",
      component: () => import("@/views/user/menu1/index"),
      name: "Menu1",
      meta: { title: "人员列表" },
    },
    {
      path: "menu2",
      component: () => import("@/views/user/menu2/index"),
      name: "Menu2",
      meta: { title: "人效统计" },
    },
    {
      path: "menu3",
      component: () => import("@/views/user/menu3/index"),
      name: "Menu3",
      meta: { title: "工作量列表" },
    },
  ],
};
