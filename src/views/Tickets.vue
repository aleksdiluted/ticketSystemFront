<template>
  <div>
    <h3>Täname, et pöördusite meie kasutajatoe poole!</h3>
    <div>
      <span>Palun sisestage oma nimi: </span> <br>
      <input placeholder="Nimi" v-model="userName"> <br>
      <br>
      <span>Palun kirjeldage võimalikult detailselt oma probleemi või küsimust:</span>
      <form>
        <textarea placeholder="Kuidas saame Teid aidata?" v-model="description"></textarea>
      </form>
      <br>
      <span>Palun sisestage pöördumise lahendamise tähtaeg:</span> <br>
      <input type="datetime-local" v-model="dueDate" min="2022-03-04"> <br>
      <br>
      <button class="btn btn-primary" v-on:click="addNewTicket">Lisa pöördumine</button>
    </div>
    <br>
    <div>
      <table class="table table-hover">
        <thead>
        <tr>
          <th style="width: 15%">Pöörduja nimi</th>
          <th style="width: 40%">Pöördumise kirjeldus</th>
          <th style="width: 20%">Sisestatud</th>
          <th style="width: 20%">Tähtaeg</th>
          <th style="width: 5%">Täidetud</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="ticket in tickets">
          <td>{{ ticket.userName }}</td>
          <td>{{ ticket.description }}</td>
          <td>{{ ticket.enteredDate }}</td>
          <td>
            <template v-if="ticket.dueDateMinusOneHour <= timestamp">
              <span style="color: red">{{ ticket.dueDate }}</span>
            </template>
            <template v-else>{{ ticket.dueDate }}</template>
          </td>
          <td>
            <button>Täidetud</button>
          </td>
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
      userName: '',
      description: '',
      enteredDate: '',
      dueDate: '',
      dueDateMinusOneHour: '',
      timestamp: ''
    }
  },
  methods: {
    addNewTicket: function () {
      let request = {
        userName: this.userName,
        description: this.description,
        dueDate: this.dueDate,
        dueDateMinusOneHour: this.dueDateMinusOneHour,
      }
      this.$http.post("/helpdesk/new/ticket", request
      ).then(response => {
        this.tickets = response.data
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
    getNow: function () {
      const today = new Date();
      this.timestamp = today.toISOString();
    }
  },
  mounted: function () {
    setInterval(function () {
      this.getNow()
    }.bind(this), 1000)
  }
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