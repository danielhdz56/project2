<template>
    <table id="table-grades">
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
                        rowspan: '2'
                    },
                    {
                        name: 'Assignment #1',
                        rowspan: '1',
                    },
                    {
                        name: 'Assignment #2',
                        rowspan: '1'
                    },
                    {
                        name: 'Assignment #3',
                        rowspan: '1'
                    },
                    {
                        name: 'Average',
                        rowspan: '2'
                    }
                ]}, {
                headers: [{
                    name: 'Grade',
                    rowspan: ''
                }, {
                    name: 'Test',
                    rowspan: ''
                }, {
                    name: 'Quiz',
                    rowspan: ''
                }]
            }],
            rowsBody: [{
                dataCells: [{
                    name: '12345' // id
                }, {
                    name: 'foo' // name
                }, {
                    name: '50' // agmt 1
                }, {
                    name: '72' // agmt 2
                }, {
                    name: '100' // agmt 3
                }, {
                    name: 'returnsomefunction' // avg
                }]
            }]
        }
    }
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

