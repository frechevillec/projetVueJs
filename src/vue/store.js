import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const movies_store = new Vuex.Store({
    state: {
        movie_to_add: {},
        movie_to_edit: undefined,
        movie_to_display: undefined,
        search: undefined,
        disp_edit:false,
        cpt: 0,
        movies: [
            {
                title: "La Grande Vadrouille",
                year: 1966,
                langue: "FR",
                genre: "Comédie, Guerre",
                realisator: "Gérard Oury",
                synopsys: "En 1942, pendant l'Occupation, un bombardier britannique embarquant cinq hommes d'équipage est abattu au-dessus de Paris par la Flak, lors d'un retour de raid aérien. Ses occupants sautent en parachute. Deux sont faits prisonniers, les trois autres parviennent à échapper aux Allemands. Le premier, sir Reginald Brook (alias « Big Moustache »), atterrit dans le zoo de Vincennes, le second, Peter Cunningham, sur la nacelle d'un peintre en bâtiment, Augustin Bouvet, et le dernier, Alan MacIntosh, sur le toit de l'opéra Garnier avant de se réfugier dans la loge d'un chef d'orchestre acariâtre, Stanislas Lefort. Bouvet et Lefort doivent alors, malgré eux, cacher les aviateurs avant de les aider à rejoindre la zone libre, et de là l'Angleterre. Pourchassés par les Allemands et notamment le major Achbach, les fugitifs traversent de nombreuses péripéties lors de leur voyage vers la Bourgogne.",
                note:undefined
            },
            {
                 titre: "Le Garçon et la Bête",
                annee: 2016,
                langue: "FR / ENG / JPN",
                genre: " Animation, Aventure",
                realisateur: "Mamoru Hosoda",
                resume: "Shibuya, le monde des humains, et Jutengai, le monde des Bêtes... C'est l'histoire d'un garçon solitaire et d'une Bête seule, qui vivent chacun dans deux mondes séparés. Un jour, le garçon se perd dans le monde des Bêtes où il devient le disciple de la Bête Kumatetsu qui lui donne le nom de Kyuta. Cette rencontre fortuite est le début d'une aventure qui dépasse l'imaginaire...",
                note:undefined
            },
        ],
    },
    mutations: {
        newMovie:state => {
            state.movies.push(state.movie_to_add);
            state.movie_to_add = {};
        },
        deleteMovie:state => {
            state.movies.splice(state.cpt, 1);
        },
    }
});
