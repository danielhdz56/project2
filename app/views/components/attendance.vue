<template>
    <table>
        <thead>
            <tr>
                <th rowspan="3">Student ID</th>
                <th rowspan="3">Student Name</th>
                <th rowspan="1" colspan="3">Attendance</th>
            </tr>

            <tr>
                <th>Present</th>
                <th>Absent</th>
                <th>Tardy</th>
            </tr>
        </thead>

        <tbody>
            <tr :key="student.id" v-for="student in students">
                <td>{{student.id}}</td>
                <td>{{student.firstname}} {{student.lastname}}</td>
                <td><div class="checkmark" v-if="student.att_codes[0].id === 1"></div></td>
                <td><div class="checkmark" v-if="student.att_codes[0].id === 2"></div></td>
                <td><div class="checkmark" v-if="student.att_codes[0].id === 3"></div></td>
            </tr>
        </tbody>
    </table>
</template>

<script>

export default {
    data() {
        return {
            students: []
        }
    },
    created() {
        this.$nextTick(function() {
            axios.get('api/attendances').then((res) => {
                this.students = res.data;
            });
        });
    }
}
</script>

<style scoped>
    .checkmark {
        display:inline-block;
        width: 3px;
        height: 6px;
        border: solid #000;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
    }
</style>

