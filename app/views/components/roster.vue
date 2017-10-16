<template>
    <table>
        <thead>
            <tr>
                <th>Student ID</th>
                <th>Last Name</th>
                <th>First Name</th>
                <th>Sex</th>
                <th>Address</th>
                <th>email</th>
            </tr>
        </thead>

        <tbody>
            <tr :key="student.id" v-for="student in students">
                <td>{{student.id}}</td>
                <td>{{student.lastname}}</td>
                <td>{{student.firstname}}</td>
                <td>{{student.sex}}</td>
                <td>{{student.address}}</td>
                <td>{{student.email}}</td>
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
            });
        });
    }
}
</script>

<style>

</style>
