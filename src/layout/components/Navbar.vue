<template>
  <div class="navbar">
    <!-- <hamburger
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    /> -->
    <img src="../../assets/layout/navbar.png" alt="" />
    <div class="left-logo">
      <img src="../../assets/layout/logo.png" alt="" />
    </div>
    <!-- <breadcrumb class="breadcrumb-container" /> -->
    <!-- 右侧菜单栏 -->
    <div class="right-menu">
      <div class="user-avatar">
        <img src="../../assets/layout/user.png" alt="" />
        <i>欢迎您，<span>admin</span></i>
      </div>
      <div class="avatar-wrapper" @click.native="logout" hover="退出登录">
        退出▼
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumb from "@/components/Breadcrumb";
import Hamburger from "@/components/Hamburger";

export default {
  components: {
    Breadcrumb,
    Hamburger,
  },
  computed: {
    ...mapGetters(["sidebar", "avatar"]),
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: fixed;
  left: 0;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .left-logo {
    position: absolute;
    top: 0;
    left: 0;
    img {
      width: 88px;
      height: 36px;
      margin: 6px 0 0 15px;
    }
  }
  .right-menu {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }
    .user-avatar {
      line-height: 50px;
      img {
        vertical-align: middle;
      }
    }
    .avatar-wrapper {
      width: 50px;
      margin: 0px 20px ;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    // .avatar-container {
    //   margin-right: 30px;

    //   .avatar-wrapper {
    //     padding: auto 20px;
    //     position: relative;

    //     .user-avatar {
    //       cursor: pointer;
    //       width: 40px;
    //       height: 40px;
    //       border-radius: 10px;
    //     }

    //     .el-icon-caret-bottom {
    //       cursor: pointer;
    //       position: absolute;
    //       right: -20px;
    //       top: 25px;
    //       font-size: 12px;
    //     }
    //   }
    // }
  }
}
</style>
