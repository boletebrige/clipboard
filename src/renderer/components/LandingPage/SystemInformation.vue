<template>
  <v-container>
    <v-data-table
        v-bind:headers="headers"
        :items="items"
        class="elevation-1"
        hide-actions
        dark
      >
      <template slot="items" scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.data }}</td>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
         headers: [
          {
            text: 'System Information',
            align: 'left',
            sortable: false,
            value: 'name'
          }
        ],
        items: [
          {
            value: false,
            name: 'Electron:',
            data: process.versions['atom-shell']
          },
          {
            value: false,
            name: 'Node:',
            data: process.versions.node
          },
          {
            value: false,
            name: 'Vue.js',
            data: require('vue/package.json').version
          },
          {
            value: false,
            name: 'Platform',
            data: require('os').platform()
          },
          {
            value: false,
            name: 'Architecture',
            data: require('os').arch()
          },
          {
            value: false,
            name: 'Number of CPU',
            data: require('os').cpus().length
          }
        ]
      }
    }
  }
</script>

<style scoped>
</style>
