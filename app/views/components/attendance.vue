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
            <tr :key="student.ID" v-for="student in students">
                <td>{{student.ID}}</td>
                <td>{{student.name}}</td>
                <td>{{student.present}}</td>
                <td>{{student.absent}}</td>
                <td>{{student.tardy}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>

export default {
    data() {
        return {
            students: [{
                ID: "W0908254",
                name: "David Wright",
                present: 50000,
                absent: 0,
                tardy: -30
            },
            {
                ID: "H3212543",
                name: "Daniel Hernandez",
                present: 0,
                absent: 7000,
                tardy: 80000000
            }]
        }
    }
}
</script>

<style scoped>

</style>

