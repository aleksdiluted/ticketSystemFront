<template>
  <div>
    <p> Siia tulevad pöördumised </p>
<div>
  <input placeholder="Pöördumise kirjeldus" v-model="ticket.description">
  <input placeholder="Täitmise tähtaeg" v-model="ticket.dueDate">
</div>
    <div>
      <table class="table table-hover">
        <thead>
        <tr>
          <th>Ticket id</th>
<!--          <th>Kasutaja</th>-->
          <th>Sisestatud</th>
          <th>Tähtaeg</th>
          <th>Sisu</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="ticket in tickets">
          <td>{{ ticket.id }}</td>
<!--          <td>{{ ticket.userName }}</td>-->
          <td>{{ ticket.description }}</td>
          <td>{{ ticket.enteredDate }}</td>
          <td>{{ ticket.dueDate }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script>
export default {
  name: "Tickets",
  data: function () {
    return {
      tickets: {
        id: '',
        userName: '',
        description: '',
        enteredDate: '',
        dueDate: '',
      }
    }
  },
  methods: {
    showTickets: function () {
      this.$http.get("/helpdesk/new/ticket")
          .then(response => {
            this.tickets = response.data
            console.log(response.data)
          }).catch(error => {
        console.log(error)
      })
    }
  },
  beforeMount() {
    this.showTickets()
  }
}
</script>

<style scoped>

</style>