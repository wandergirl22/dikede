import Layout from "@/layout";
export default {
  path: "/strategy",
  component: Layout,
  children: [
    {
      path: "",
      component: () => import("@/views/strategy/index"),
      name: "Strategy",
      meta: { title: "策略管理", icon: "el-icon-s-opportunity" },
    },
  ],
};
