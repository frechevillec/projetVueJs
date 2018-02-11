<template>
    <div>
        <router-link to="/"><button>Accueil</button></router-link>
        <ul>
            <li v-bind:key="movie_to_display.title">
                <h3>{{ movie_to_display.title }} ({{ movie_to_display.realisator }} - {{ movie_to_display.year }})</h3>
                <b>Genre : </b>{{ movie_to_display.genre }} ({{ movie_to_display.langue }}) {{ movie_to_display.note }}<br/><br/>
                {{ movie_to_display.synopsys }}<br/><br/>
            </li>
        </ul><br><br>

        
        <button v-on:click="toogle_disp_edit">Toogle edit</button>
        <span v-if="disp_edit">
            <p>Edit film<br/>
                <input type="text" v-model="movie_to_display.title" placeholder="Titre"/><br/>
                <input type="text" v-model="movie_to_display.year" placeholder="Année"/><br/>
                <input type="text" v-model="movie_to_display.realisator" placeholder="Realisateur"/><br/>
                <input type="text" v-model="movie_to_display.genre" placeholder="Genre"/><br/>
                <input type="text" v-model="movie_to_display.langue" placeholder="Langues"/><br/>
                <textarea v-model="movie_to_display.synopsys" placeholder="Synopsis"></textarea><br/>
                <input type="number" v-model="movie_to_display.note" name="note" min="1" max="5">
            </p>
            <button v-on:click="editMovie">Editer</button>
        </span>
    </div>
</template>

<script>

import {my_store} from '../store.js'

  export default {
      data() {
          return {
              store: my_store
          }
      },
      computed: {
          movies() {
              return this.$store.state.movies
          },
          movie_to_display() {
              return this.$store.state.movie_to_display
          },
          disp_edit() {
              return this.$store.state.disp_edit
          }
      },
      methods: {
          editMovie: function () {
              this.$store.state.movies.splice(this.$store.state.cpt, 1);
              this.$store.state.movies.push(this.$store.state.movie_to_display);
          },
          toogle_disp_edit:function () {
              this.$store.state.disp_edit = !this.$store.state.disp_edit;
          }
      }
  }

</script>
