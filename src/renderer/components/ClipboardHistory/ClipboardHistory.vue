<template>
  <v-card>
    <v-card-title>
      Clipboard Content
      <v-spacer></v-spacer>
      <v-text-field
        append-icon="search"
        label="Search"
        single-line
        hide-details
        v-model="search"
      ></v-text-field>
    </v-card-title>
    <v-data-table
        v-bind:headers="headers"
        v-bind:items="items"
        v-bind:search="search"
        v-bind:pagination.sync="pagination"
      >
      <template slot="items" scope="props">
        <td>
          <v-edit-dialog
            lazy
          > {{ props.item.name }}
            <v-text-field
              slot="input"
              label="Edit"
              v-model="props.item.name"
              single-line
              counter
              :rules="[max25chars]"
            ></v-text-field>
          </v-edit-dialog>
        </td>
        <td class="text-xs-left">
          {{ props.item.time }}
        </td>
        <td class="text-xs-right">
          <v-expansion-panel>
            <v-expansion-panel-content>
              <div slot="header">{{ props.item.cData.substring(0,80) }}</div>
              <v-card>
                <v-card-text>{{ props.item.cData }}</v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </td>
      </template>
      <template slot="pageText" scope="{ pageStart, pageStop }">
        From {{ pageStart }} to {{ pageStop }}
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
  var moment = require('moment');
  const Store = require('electron-store');

  const memory = new Store();

  const {clipboard} = require('electron')

  export default {
    name: 'landing-page',
    components: {  },
    data() {
      return {
        max25chars: (v) => v.length <= 25 || 'Input too long!',
        tmp: '',
        search: '',
        pagination: {
          sortBy: 'time',
          descending: true
        },
        headers: [
          {
            text: 'Date',
            align: 'left',
            value: 'name'
          },
          {
            text: 'Time',
            align: 'left',
            value: 'time'
          },
          { text: 'Content', align: 'left', value: 'cData', sortable: false }
        ],
        items: [],
        temp: {text: null }
      }
    },
    methods: {
      getContent(){
        if ((this.temp.text !== clipboard.readText())){
          
          if(memory.get('data')){
            console.log(this.temp.text)
            if(memory.get('data')[memory.get('data').length - 1].cData !== clipboard.readText()){
              this.items = memory.get('data');
              this.items.push({name: moment(Date()).format('DD.MM.YYYY'), time: moment(Date()).format('HH:mm:ss') , cData: clipboard.readText()})
              memory.set('data', this.items)
              this.temp = { text: clipboard.readText()};
              console.log(memory.path)
            }else{
              this.items = memory.get('data');
              this.temp = { text: memory.get('data')[memory.get('data').length - 1].cData};
            }
          }else{
            console.log('else')
            this.items.push({name: moment(Date()).format('DD.MM.YYYY'), time: moment(Date()).format('HH:mm:ss') , cData: clipboard.readText()})
            this.temp = { text: clipboard.readText()};
            memory.set('data', this.items)
            console.log(memory.get('data'));
          }
        }

      }
    },
    mounted(){
      var that = this;
      setInterval(function(){ that.getContent() }, 1000);

      
    }
  }
</script>

<style>


</style>
