<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h2 class="display-4">User Projects</h2>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <select v-model="selected" @change="onChange($event)" class="form-control">
            <option disabled value="0">--</option>
            <option
              v-bind:key="user.id"
              :value="user.id"
              v-for="user in users"
            >{{ user.firstName }} {{ user.lastName }}</option>
          </select> 
        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <table id="projects-table" class="table">
            <thead>
              <tr>
                <th>Project Id</th>
                <th>Start Date</th>
                <th>Time to Start</th>
                <th>End Date</th>
                <th>Credits</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-bind:key="project.id" v-for="project in projects">
                <td>{{project.project.id}}</td>
                <td>{{project.project.startDate | formatDate}}</td>
                <td>{{project.project.startDate | date-diff(project.assignedDate) }}</td>
                <td>{{project.project.endDate | formatDate}}</td>
                <td>{{project.project.credits}}</td>
                <td>{{project.isActive |activeFilter}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "./js/Api";
import moment from "moment";

// app Vue instance
const app = {
  name: "app",
  components: {},
  // app initial state
  data: () => {
    return {
      users: null,
      selected: "0",
      projects: null
    };
  },

  mounted() {
    api.getAllUsers().then(response => {
      this.$log.debug("Data loaded: ", response.data);
      this.users = response.data;
    });
  },
  methods: {
    onChange(event) {
      api.getAllProjectsForUser(event.target.value).then(response => {
        this.$log.debug("Data loaded: ", response.data);
        this.projects = response.data;
      });
    }
  },
  filters: {
    formatDate: function(value) {
      if (!value) return "";
      let dateMomment = moment(value);
      return dateMomment.format("MMMM Do YYYY");
    },
    dateDiff: function(value, otherDate) {
      if (!value) return "";
      var one_day = 1000 * 60 * 60 * 24;
      let date1 = new Date(value);
      let date2 = new Date(otherDate);
      // Convert both dates to milliseconds
      let date1_ms = date1.getTime();
      let date2_ms = date2.getTime();

      // Calculate the difference in milliseconds
      let difference_ms = date1_ms - date2_ms;

      // Convert back to days and return
      let daysToStart = Math.round(difference_ms / one_day);

      if (daysToStart > 0) return daysToStart;
      else return "Started";
    },
    activeFilter: function(value) {
      if (value) return "Active";
      else return "Inactive";
    }
  }
};

export default app;
</script>

<style>
[v-cloak] {
  display: none;
}
</style>