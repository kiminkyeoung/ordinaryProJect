<template>
    <div>
        <nuxt-link to="/page">해당 페이지 이름으로 이동</nuxt-link><br/><br/><br/>
        <nuxt-link :to="{path:'page', query:{id:1}}">해당 페이지로 이동하면서 URL 파라미터를 던짐</nuxt-link><br/><br/><br/>
        <nuxt-link :to="{name:'page-id', params:{id:1}}">동적라우터로 이동합니다.</nuxt-link>
    </div>
</template>