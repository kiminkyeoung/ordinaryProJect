<template>
    <div>
        <div id="printArea">
            <h1>프린트가 될 구역입니다.</h1>
        </div>
        <button type="button" onclick="printJS({
            printable:'printArea',
            type:'html',
            css: ['/print.css'],
            scanStyles : false
            })">Print
        </button>
    </div>
</template>