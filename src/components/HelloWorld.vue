<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <v-row>
        <v-col
          v-for="(project, index) in [baseProject, nestProject, norseProject]"
          :key="index"
          cols="4"
        >
          <v-list density="compact">
            <v-list-item>{{ project.name }} {{ project.network.name }}</v-list-item>
            <v-list-item>
              {{ project.network.nodes.firstNode.name }}
              <{{ project.network.nodes.firstNode.model.name }}>
            </v-list-item>
            <v-list-item>
              {{ project.network.firstConnection.name }}
              <{{ project.network.firstConnection.model.name }}>
            </v-list-item>
            <v-list-item>
              {{ project.simulation.name }}
              <{{ project.simulation.code.name }}>
            </v-list-item>
            <v-list-item>
              {{ project.simulation.network.name }} <->
              {{ project.network.code.name }}
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import { BaseProject } from '@/helpers/base/project'
import { NESTProject } from '@/helpers/nest/project'
import { NorseProject } from '@/helpers/norse/project'

const baseProject = new BaseProject()
const nestProject = new NESTProject()
const norseProject = new NorseProject()
</script>
