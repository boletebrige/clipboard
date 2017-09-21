<template>
 <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
        <v-flex xs10 offset-xs1>
            <v-toolbar dark class="grey darken-3">

                <v-spacer></v-spacer>
                <v-btn icon @click="addNote">
                    <v-icon>add_circle</v-icon>
                </v-btn>
            </v-toolbar>
        </v-flex>
    </v-layout>
    <v-layout row wrap>
        <v-flex xs10 offset-xs1>
             <v-card class="grey darken-2" v-if="newNote">
              <v-card-title primary-title>
                    <v-text-field
                    name="input-1"
                    label="Title"
                    deep-orange
                    v-model="title"
                    ></v-text-field>
              </v-card-title>
              <v-card-text>
                  <v-text-field box dark multi-line label="Content" v-model="content"></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat dark @click="discardNote()">Discard</v-btn>
                <v-btn flat dark @click="saveNote()">Save</v-btn>
              </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
    <v-layout row wrap>
        <v-flex xs10 offset-xs1>
            <v-expansion-panel>
                <v-expansion-panel-content v-for="(note,i) in notes" :key="i">
                    <div slot="header">
                         <v-layout row wrap>
                            <v-flex xs6>
                                <p>{{ note.title }}</p>
                            </v-flex>
                            <v-flex xs5 class="text-xs-right">
                                <small>{{ moment(note.date, 'DD.MM.YYYY') }} {{ moment(note.date, 'HH:MM') }}</small>
                            </v-flex>
                        </v-layout>
                    </div>
                    <v-card>
                        <v-card-text class="grey darken-2">{{ note.content }}</v-card-text>
                    </v-card>
                    <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat dark @click="editNote(note)">Edit</v-btn>
              </v-card-actions>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    var moment = require('moment');
    const Store = require('electron-store');

    const memory = new Store();
export default {
    name: 'notes',
    data(){
        return {
            title: null,
            content: null,
            newNote: false,
            notes: [],
            isEditing: false

        }
    },
    methods: {
        moment(data, format){
            return moment(data).format(format);
        },
        addNote(){
            this.newNote = !false;
        },
        saveNote(){
            console.log(this.title);
            this.notes.push ({ title: this.title, content: this.content, date: Date()});
            console.log(this.notes);
            memory.set('notes', this.notes)
            this.discardNote();
        },
        discardNote(){
            this.title = null;
            this.content = null;
            this.newNote = !true;
            let test = Date();
            console.log(moment(test).format('DD.MM.YYYY'))
        },
        editNote(note){
            console.log(note);
            this.isEditing = true;
        }
    },
    mounted(){
        if(memory.get('notes')){
            console.log(memory.get('notes'));
            this.notes = memory.get('notes');
        }else{
            memory.set('notes', this.notes)
            console.log(memory.path)
        }
    }
}
</script>

