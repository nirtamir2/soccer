<template>
    <v-toolbar dark fixed class="primary">
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title class="white--text">Soccer</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn flat to="grouplist">groups</v-btn>
        <v-btn flat to="login">login</v-btn>
        <v-btn flat to="/">home</v-btn>
        <v-btn icon>
            <v-icon>more_vert</v-icon>
        </v-btn>
    </v-toolbar>
</template>
