<template>
  <v-app>
    <v-app-bar color="#FBC02D" dark app>
      <v-toolbar-items>
        <v-btn text x-large to="/" style="text-transform:none">iTunes検索サイト</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>

      <v-btn icon to="/">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {};
</script>