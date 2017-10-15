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
            <tr :key="student.id" v-for="student in students">
                <td>{{student.id}}</td>
                <td>{{student.firstname}} {{student.lastname}}</td>
                <td>{{student.testgrade}}</td>
                <td>{{student.quizgrade}}</td>
                <td>{{student.dailygrade}}</td>
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
            axios.get('api/user/student').then((res) => {
                this.students = res.data;
                console.log(this.students);
            })
        })
    }
}
</script>

<style scoped>
</style>

