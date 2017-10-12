<template>
    <table id="table-attendance">
        <thead>
            <tr v-for="row in rowsHead">
                <th :colspan="header.colspan" :rowspan="header.rowspan" v-for="header in row.headers">{{header.name}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in rowsBody">
                <td v-for="dataCell in row.dataCells">{{dataCell.name}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>


export default {
    data() {
        return {
            rowsHead: [{
                headers: [{
                        name: 'Student ID',
                        rowspan: '3'
                    }, {
                        name: 'Student Name',
                        rowspan: '3'
                    },
                    {
                        name: 'Attendance',
                        rowspan: '1',
                        colspan: '3'
                    }
                ]}, {
                headers: [{
                    name: 'Present',
                    rowspan: ''
                }, {
                    name: 'Absent',
                    rowspan: ''
                }, {
                    name: 'Tardy',
                    rowspan: ''
                }]
            }],
            rowsBody: [{
                dataCells: [{
                    name: '12345' // id
                }, {
                    name: 'foo' // name
                }, {
                    name: '1' // Present
                }, {
                    name: '0' // Absent
                }, {
                    name: '0' // Tardy
                }]
            }]
        }
    }
}
</script>

<style scoped>
    #table-attendance {
        border: solid thin;
        border-collapse: collapse;
        width: 100%;
    }

    #table-attendance th,
    #table-attendance td {
        border: solid thin;
        padding: 0.5rem 2rem;
        background: whitesmoke;
    }

    #table-attendance td {
        white-space: nowrap;
    }

    #table-attendance th {
        font-weight: normal;
    }

    #table-attendance td {
        border-style: none solid;
        vertical-align: top;
    }

    #table-attendance th {
        padding: 0.2em;
        vertical-align: middle;
        text-align: center;
    }

    #table-attendance tbody td:first-child::after {
        content: leader(". ");
    }
</style>

