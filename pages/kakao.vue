<template>
    <div>

        <a class="kakao" @click="sendkakao">
        카카오톡
        </a>

    </div>
</template>
<script>
    export default {
        head() {
            return {
                script: [
                    {src: '//developers.kakao.com/sdk/js/kakao.min.js'},
                ],
            }
        },
        data() {
            return {
                url: '',
            };
        },
        mounted() {
            this.url = window.document.location.href;
        },
        methods: {
            sendkakao: function () {
                Kakao.init('앱키입력');
                Kakao.Link.sendDefault({
                    objectType: 'feed',
                    content: {
                        title: '공유할 될 제목',
                        description: '공유될 내용',
                        imageUrl:
                            'http://localhost:3000/test.png',
                        link: {
                            mobileWebUrl: 'http://localhost:3000',
                            webUrl: 'http://localhost:3000',
                        },
                    },
                    buttons: [
                        {
                            title: '웹으로 보기',
                            link: {
                                mobileWebUrl: 'http://localhost:3000',
                                webUrl: 'http://localhost:3000',
                            },
                        },
                    ],
                })
            }
        },
    };
</script>