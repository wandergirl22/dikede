import Layout from "@/layout";
export default {
  path: "/bill",
  component: Layout,
  children: [
    {
      path: "",
      component: () => import("@/views/bill/index"),
      name: "Bill",
      meta: { title: "对账统计", icon: "el-icon-notebook-2" },
    },
  ],
};
