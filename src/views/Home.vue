<template>
  <v-app>
    <div class="container">
      <input
        class="text"
        type="text"
        placeholder="アーティスト名/曲名"
        required
        v-model="searchName"
        @keyup.enter="serch"
      />

      <input class="submit" type="submit" value="検索" @click="serch" />
    </div>
  </v-app>
</template>

<script>
export default {
  data:() => ({
      searchName: ''
  }),
  methods: {
    serch() {
      this.$router.push(`/result/${this.searchName}`)
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  height: 70px;
  background-color: #fdd835;
  box-sizing: border-box;
}

.text {
  width: 50%;
  max-width: 300px;
  padding: 0.5em;
  border: none;
  background-color: white;
}

.submit {
  padding: 0.5em 2em;
  margin-left: 10px;
  color: #fff;
  background-color: #42b883;
  border: none;
  border-radius: 20px;
}
</style>