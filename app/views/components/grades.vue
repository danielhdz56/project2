<template>
    <table id="table-grades">
        <thead>
            <tr>
                <th> Student ID </th>
                <th>Student Name</th>
                <th>Test</th>
                <th>Quiz</th>
                <th>Homework</th>
            </tr>
        </thead>
        
        <tbody>
            <tr :key="student.ID" v-for="student in students">
                <td>{{student.ID}}</td>
                <td>{{student.firstName}} {{student.lastName}}</td>
                <td>{{student.testGrade}}</td>
                <td>{{student.quizGrade}}</td>
                <td>{{student.dailyGrade}}</td>
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
    mounted() {
        this.$nextTick(function() {
            axios.get("/api/users").then(function(res) {
                this.students = res.data;
            });
        });
    },
}
</script>

<style scoped>
#table-grades {
    border: solid thin;
    border-collapse: collapse;
    width: 100%;
}

#table-grades th,
#table-grades td {
    border: solid thin;
    padding: 0.5rem 2rem;
    background: whitesmoke;
}

#table-grades td {
    white-space: nowrap;
}

#table-grades th {
    font-weight: normal;
}

#table-grades td {
    border-style: none solid;
    vertical-align: top;
}

#table-grades th {
    padding: 0.2em;
    vertical-align: middle;
    text-align: center;
}

#table-grades tbody td:first-child::after {
    content: leader(". ");
}
</style>

