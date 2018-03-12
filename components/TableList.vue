<template lang="pug">
  table.table
    thead
      tr
        th(v-for='(field, index) in fields' :key='index')
          h3.tableHeader {{ field.toUpperCase() }}
    tbody
      tr(v-for='(item, index) in data' :key='index')
        th(v-for='(field, index) in fields' :key='index') 
          nuxt-link(:to="linkPrefix + item.id") {{ item[field] }}
</template>

<script>
export default {
  name: 'TableList',
  props: {
    data: {
      required: true,
      type: Array
    },
    fields: {
      required: true,
      type: Array
    },
    linkPrefix: {
      required: true,
      type: String
    }
  }
}
</script>
