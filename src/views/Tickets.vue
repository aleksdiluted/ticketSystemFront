<template>
  <div>
    <p> Siia tulevad pöördumised </p>
    <div>
      <input type="text" placeholder="Pöördumise kirjeldus" v-model="description" style="width: 400px"> <br>
      <input type="datetime-local" placeholder="Täitmise tähtaeg" v-model="dueDate" style="width: 400px"> <br>
      <button class="btn btn-primary" v-on:click="addNewTicket">Lisa pöördumine</button>
    </div>
    <div>
      <table class="table table-hover">
        <thead>
        <tr>
          <!--          <th>Ticket id</th>-->
          <!--          <th>Kasutaja</th>-->
          <th>Sisu</th>
          <th>Sisestatud</th>
          <th>Tähtaeg</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="ticket in tickets">
          <!--          <td>{{ ticket.id }}</td>-->
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
      tickets: {},
      id: '',
      userName: '',
      description: '',
      enteredDate: '',
      dueDate: '',

    }
  },
  methods: {
    // showTickets: function () {
    //   this.$http.get("/helpdesk/new/example/ticket")
    //       .then(response => {
    //         this.tickets = response.data
    //         console.log(response.data)
    //       }).catch(error => {
    //     console.log(error)
    //   })
    // },
    addNewTicket: function () {

      let request = {
        // userName: this.userName,
        description: this.description,
        dueDate: this.dueDate
      }

      // if using alternative then remove "this." from someDtoObject
      this.$http.post("/helpdesk/new/ticket", request
      ).then(response => {
        this.tickets = response.data
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    }
  },
}
</script>

<style scoped>

</style>