<template>
  <div id="app">
    <v-app id="example-1" toolbar footer dark>
      <v-navigation-drawer
        persistent
        v-model="drawer"
        light
        enable-resize-watcher
        absolute
        dark
      >
        <v-list dense>
          <v-list-tile>
            <v-list-tile-action>
              <router-link to="/"><v-icon>home</v-icon></router-link>
            </v-list-tile-action>
            <v-list-tile-content>
              <router-link to="/"><v-list-tile-title>Home</v-list-tile-title></router-link>
            </v-list-tile-content>
            
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>info</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title><router-link to="system-information">System Information</router-link></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>keyboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title><router-link to="clipboard-history">Clipboard History</router-link></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>note</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title><router-link to="notes">Notes</router-link></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar dark fixed>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>{{ this.$route.name }}</v-toolbar-title>

      </v-toolbar>
      <main>
        <v-container fluid>
          <div>
            <router-view></router-view>
          </div>
        </v-container>
      </main>
      <v-footer dark>
        <span class="white--text">© 2017</span>
      </v-footer>
    </v-app>
  </div>
</template>



<script>

  export default {
    name: 'clipboard',
    data() {
      return {
        drawer: true,
        card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
      }
    },
  }
</script>


<style lang="scss">

  @import '../../node_modules/vuetify/dist/vuetify.min.css' ;
  @import '../../node_modules/material-design-icons/iconfont/material-icons.css';

</style>

