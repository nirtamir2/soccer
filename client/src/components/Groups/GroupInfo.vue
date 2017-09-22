<template>
    <v-flex xs12>
        <v-card :class="color">
            <v-container fluid grid-list-lg>
                <v-layout row>
                    <v-flex xs7>
                        <div>
                            <div class="headline">{{group.name}}</div>
                            <div>{{group.descr}}</div>
                        </div>
                    </v-flex>
                    <v-flex xs5>
                        <v-card-media :src="group.image" height="125px" contain></v-card-media>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-flex>
</template>
<script>
export default {
  props: ['group', 'color']
}
</script>

