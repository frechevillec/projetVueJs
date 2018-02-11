import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const my_store = new Vuex.Store({
    state: {
        movie_to_add: {},
        movie_to_edit: undefined,
        movie_to_display: undefined,
        search: undefined,
        disp_edit:false,
        cpt: 0,
        movies: [
            {
                title: "Pacific Rim",
                year: 2013,
                langue: "FR / ENG",
                genre: "Action, Science-Fiction",
                realisator: "Guillermo Del Toro",
                synopsys: "Pour combattre les kaijus, des créatures sorties d'une brèche interdimensionnelle près de la faille géologique au fond de l'océan Pacifique en août 2013, un nouveau genre d’arme a été conçu : des robots géants, appelés les jaeger, contrôlés en simultané par deux pilotes dont les esprits sont reliés par un pont neuronal.",
                note:undefined
            },
            {
                title: "La Ligne Verte",
                year: 1999,
                langue: "FR / ENG",
                genre: "Drame, Fantastique",
                realisator: "Franck Darabond",
                synopsys: "Paul Edgecomb, pensionnaire centenaire d'une maison de retraite, est hanté par ses souvenirs. Gardien-chef du pénitencier de Cold Mountain en 1935, il était chargé de veiller au bon déroulement des exécutions capitales en s'efforçant d'adoucir les derniers moments des condamnés. Parmi eux se trouvait un colosse du nom de John Coffey, accusé du viol et du meurtre de deux fillettes. Intrigué par cet homme candide et timide aux dons magiques, Edgecomb va tisser avec lui des liens très forts.",
                note:undefined
            },
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
                title: "Independance Day",
                year: 1996,
                langue: "FR / ENG",
                genre: "Science-Fiction",
                realisator: "Roland Emmerich",
                synopsys: "Une immense soucoupe volante envahit le ciel terrestre, libérant un nombre infini de plus petites soucoupes qui prennent position au-dessus des plus grandes villes du monde. Un informaticien new-yorkais décrypte les signaux émanant des étranges voyageurs. Ils ne sont pas du tout amicaux et ces extraterrestres se préparent à attaquer la Terre.",
                note:undefined
            }
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
