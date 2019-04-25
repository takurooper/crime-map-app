<template>
  <header id="header">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="/">Crime Map</b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav>
              <b-nav-item href="#">{{ login_state }}</b-nav-item>
            </b-navbar-nav>
            <b-nav-item-dropdown text="もっと見る" right>
              <b-dropdown-item href="/child">こども</b-dropdown-item>
              <b-dropdown-item href="/parent">親</b-dropdown-item>
              <b-dropdown-item href="/parent">登録</b-dropdown-item>
            </b-nav-item-dropdown>

          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </header>
</template>

<script>
/* eslint-disable */

  import { mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbContainer, mdbRow, mdbInput, mdbNavbarBrand, mdbIcon } from 'mdbvue';
  export default {
    name: 'HamburgerMenuPage',
    data() {
    return {
      login_state: "あ"
    }
    },
    components: {
      mdbNavbar,
      mdbNavItem,
      mdbNavbarNav,
      mdbNavbarToggler,
      mdbContainer,
      mdbRow,
      mdbInput,
      mdbNavbarBrand,
      mdbIcon
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.brand{
  margin-right: 0;
  display: flex;
  justify-content: center;
}
</style>