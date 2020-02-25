<template>
  <v-app>
    <v-container>
      <v-layout>
        <v-flex>
          <h2 align="center">検索キーワード：{{ $route.params.searchName }}</h2>
          <v-row dense v-for="(album, i) in albums" :key="i">
            <v-col cols="12">
              <v-card color="#42b883" dark>
                <div class="d-flex flex-no-wrap">
                  <v-avatar class="ma-3" size="120" tile>
                    <v-img :src="album.artworkUrl100"></v-img>
                  </v-avatar>
                  <div>
                    <a
                      :href="album.collectionViewUrl"
                      style="color:white;text-decoration:none;"
                      target="_blank"
                    >
                      <v-card-title v-text="album.trackName">タイトル</v-card-title>
                    </a>
                    <a
                      :href="album.artistViewUrl"
                      style="color:white;text-decoration:none;"
                      target="_blank"
                    >
                      <v-card-subtitle v-text="album.artistName">アーティスト名</v-card-subtitle>
                    </a>
                    <v-card-actions>
                      <div>{{album.primaryGenreName}}</div>・
                      <div>{{album.releaseDate | moment }}</div>
                    </v-card-actions>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  data:() => ({
    albums: []
  }),
  created() {
    axios.get("/api/")
      .then(response => {
        console.log(response);
        this.albums = response.data.results
      })
  },
  filters: {
    moment: function(date) {
      return moment(date).format("YYYY/MM/DD");
    }
  }
};
</script>
