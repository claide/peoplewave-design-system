<template>
  <div>
    <h3 class="page-header">Tables</h3>
    <section>
      <div class="card">
        <div class="card-content card-content__sm">
          <div class="row row-center-vertical mb-10">
            <div class="col-md-6">
              <div class="pagination">
                <span class="text-grey">Showing 1 - 10 out of 137</span>
              </div>
            </div>
            <div class="col-md-6 text-right">
              <el-form :inline="true">
                  <el-form-item label="Search" class="mb-0">
                    <el-input placeholder="Search employees"></el-input>
                  </el-form-item>
              </el-form>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Job Title</th>
                  <th>Manager</th>
                  <th>Review Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="employee in employees" :key="employee.id">
                  <td>{{ employee.name }}</td>
                  <td>{{ employee.Job_title }}</td>
                  <td>{{ employee.manager }}</td>
                  <td :class="{'text-danger' : employee.review_status == 'Pending setup'}">{{ employee.review_status }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="row">
            <div class="col-md-6">
              <el-form>
                <el-form-item label="Show" class="mb-0">
                  <el-select v-model="value">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                  <span class="pl-10">entries</span>
                </el-form-item>
              </el-form>
            </div>
            <div class="col-md-6 text-right">
              <ul class="pagination">
                <li><button class="btn btn-default">&lt;&lt; Prev</button></li>
                <li><button class="btn btn-flat btn-active">1</button></li>
                <li><button class="btn btn-flat">2</button></li>
                <li><button disabled="disabled" class="btn btn-flat">...</button></li>
                <li><button class="btn btn-flat">6</button></li>
                <li><button class="btn btn-default">Next &gt;&gt;</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import empdata from 'assets/data/employees.json'

export default {
  data () {
    return {
      employees: empdata,
       options: [{
          value: 'Option1',
          label: '10'
        }, {
          value: 'Option2',
          label: '25'
        }, {
          value: 'Option3',
          label: '50'
        }, {
          value: 'Option4',
          label: '100'
        }],
        value: ''
    }
  }
}
</script>
