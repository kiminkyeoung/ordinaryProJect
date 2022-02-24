<template>
    <div>
        <div>
            현재 선택된 페이지 : {{selectPage}}
            <paginate
                    :page-count="pageCount"
                    :page-range="3"
                    :margin-pages="2"
                    :click-handler="changePage"
                    :prev-text="'<'"
                    :next-text="'>'"
                    :container-class="'pagination'"
                    :page-class="'page-item'">
            </paginate>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return{
                selectPage: 1,
                pageCount: 15,
            }
        },
        methods: {
            changePage: function (pageNum) {
                this.selectPage = pageNum
            },
        }
    }
</script>
<style lang="css">
    .pagination {
        margin:24px;
    }
    .pagination li {
        min-width:32px;
        padding:2px 6px;
        text-align:center;
        margin:0 3px;
        border-radius: 6px;
        border:1px solid #eee;
        color:#666;
    }
    .pagination li:hover {
        background: #E4DBD6;
    }
    .page-item a {
        color:#666;
        text-decoration: none;
    }
    .pagination li.active {
        background-color : #E7AA8D;
        color:#fff;
    }
    .pagination li.active a {
        color:#fff;
    }
</style>
