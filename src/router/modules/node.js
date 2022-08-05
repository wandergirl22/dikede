import Layout from "@/layout";
export default {
  path: "/node",
  component: Layout,
  redirect: "/node/menu1",
  name: "Node",
  meta: { title: "点位管理", icon: "el-icon-place" },
  children: [
    {
      path: "menu1",
      component: () => import("@/views/node/menu1/index"),
      name: "Menu1",
      meta: { title: "区域管理" },
    },
    {
      path: "menu2",
      component: () => import("@/views/node/menu2/index"),
      name: "Menu2",
      meta: { title: "点位管理" },
    },
    {
      path: "menu3",
      component: () => import("@/views/node/menu3/index"),
      name: "Menu3",
      meta: { title: "合作商管理" },
    },
  ],
};
