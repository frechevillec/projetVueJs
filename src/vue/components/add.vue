<template>
    <p>Nouveau film<br/>
        <router-link to="/"><button>Accueil</button></router-link>
        <input type="text" v-model="movie_to_add.title" placeholder="Titre"/><br />
        <input type="text" v-model="movie_to_add.year" placeholder="Année"/><br />
        <input type="text" v-model="movie_to_add.realisator" placeholder="Realisateur"/><br />
        <input type="text" v-model="movie_to_add.genre" placeholder="Genre"/><br />
        <input type="text" v-model="movie_to_add.langue" placeholder="Langues"/><br />
        <textarea v-model="movie_to_add.synopsys" placeholder="Synopsis"></textarea><br />
        <input type="number" v-model="movie_to_add.note" name="note" min="1" max="5">
        <router-link to="/"><button v-on:click="newMovie">Ajouter</button></router-link>
    </p>
</template>

<script>

import {movies_store} from '../store.js'

export default {
  data(){
    return {
      store: movies_store
    }
  },
  computed: {
    movies(){
      return this.$store.state.movies
    },
    movie_to_add(){
      return this.$store.state.movie_to_add
    }
  },
  methods: {
    newMovie:function () {
        this.$store.commit('newMovie');
    }
  }
}

</script>
