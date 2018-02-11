<template>
    <div>
        <h2>Bienvenue sur My MovieList, le premier site d&apos;informations sur les meilleurs films.</h2>
        <b>Il y a actuellement {{ movies.length }} films ajoutés :</b>

        <ul>
            <li v-for="(movie, key) in movies" v-bind:key="movie.title" @click="setMovieToDisplay(movie, key)">
                <p>{{ movie.title }} ({{ movie.realisator }} - {{ movie.year }})</p>
                <span v-if="movie_to_display === movie">
                  <router-link to="/movie/details"><button>Voir détails</button></router-link>
                  <button v-on:click="deleteMovie">Supprimer</button><br/>
                </span>
            </li>
        </ul>

        <router-link to="/movie/add">
            <button>Ajouter film</button>
        </router-link>
    </div>
</template>

<script>
    import {movies_store} from '../store.js'

    export default {
        data() {
            return {
                store: movies_store
            }
        },
        computed: {
            cpt() {
                return this.$store.state.cpt
            },
            movies() {
                return this.$store.state.movies
            },
            movie_to_display() {
                return this.$store.state.movie_to_display
            }
        },
        methods: {
            setMovieToDisplay: function (movie, key) {
                this.$store.state.movie_to_display = movie;
                this.$store.state.cpt = key;
            },
            deleteMovie: function () {
                this.$store.commit('deleteMovie')
            }
        }
    }
    
</script>

<style>
    ul > li {
        cursor: pointer;
    }
</style>
