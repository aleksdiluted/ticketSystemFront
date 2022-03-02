<template>
  <div>
    <h3>Täname, et pöördusite meie kasutajatoe poole!</h3>
    <div>
      <form>
        <textarea placeholder="Kuidas saame Teid aidata?" v-model="description"></textarea>
      </form>
      <br>
      <span>Palun sisestage pöördumise lahendamise tähtaeg:</span> <br>
      <input type="datetime-local" v-model="dueDate"> <br> <br>
      <button class="btn btn-primary" v-on:click="addNewTicket">Lisa pöördumine</button>
    </div>
    <br>
    <div>
      <table class="table table-hover">
        <thead>
        <tr>
          <!--          <th>Ticket id</th>-->
          <!--          <th>Kasutaja</th>-->
          <th style="width: 60%">Pöördumise kirjeldus</th>
          <th style="width: 20%">Sisestatud</th>
          <th style="width: 20%">Tähtaeg</th>
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
      // id: '',
      // userName: '',
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
textarea {
  width: 600px;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: vertical;
}
</style>