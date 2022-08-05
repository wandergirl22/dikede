import Layout from "@/layout";
export default {
  path: "/serve",
  component: Layout,
  redirect: "/serve/menu1",
  name: "Serve",
  meta: {
    title: "设备管理",
    icon: "el-icon-receiving",
  },
  children: [
    {
      path: "menu1",
      component: () => import("@/views/serve/menu1/index"),
      name: "Menu1",
      meta: { title: "设备管理" },
    },
    {
      path: "menu2",
      component: () => import("@/views/serve/menu2/index"),
      name: "Menu2",
      meta: { title: "设备状态" },
    },
    {
      path: "menu3",
      component: () => import("@/views/serve/menu3/index"),
      name: "Menu3",
      meta: { title: "设备类型管理" },
    },
  ],
};
