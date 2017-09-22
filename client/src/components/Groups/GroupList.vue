<template>
  <v-layout row wrap>
  <group-info v-for="(group,index) in groupList" :key="group.name" 
  :group="group" 
  :color= "`blue lighten-${index % 10 < 5 ? index % 5 : 5 - index % 5 }`" />
  </v-layout>

</template>

<script>
import GroupInfo from './GroupInfo'
import GroupService from './../../services/GroupService'
export default {
  components: {
    GroupInfo
  },
  data () {
    return {
      groupList: []
    }
  },
  mounted () {
    GroupService.getGroups().then((group) => (this.groupList = group.data))
  }
}
</script>
