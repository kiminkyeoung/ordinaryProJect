<template>
    <div>
        <div class="join-box">
            <h2>Join Form</h2>
            <table>
                <colgroup>
                    <col style="width:120px;"/>
                    <col style="width:auto;"/>
                </colgroup>
                <tbody>
                <tr>
                    <td>이름</td>
                    <td>
                        <input type="text" class="form-control" v-model="name" placeholder="이름을 입력해주세요."/>
                        <div class="error-message" v-if="validation !== undefined">
                            {{ validation.firstError('name') }}
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>핸드폰번호</td>
                    <td>
                        <input type="text" class="form-control" v-model="phone" placeholder="숫자만 입력해주세요."/>
                        <div class="error-message" v-if="validation !== undefined">
                            {{ validation.firstError('phone') }}
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
            <div class="btn-box">
                <a @click="submit">SUBMIT</a>
            </div>
        </div>
    </div>
</template>
<script>
    import SimpleVueValidation from 'simple-vue-validator';

    const Validator = SimpleVueValidation.Validator;
    SimpleVueValidation.extendTemplates({
        required: '필수 입력 항목입니다.',
        length: '길이가 {0} 이어야 합니다.',
        minLength: '{0} 글자 이상이어야 합니다.',
        maxLength: '{0} 글자 이하여야 합니다.',
        digit: '숫자만 입력해주세요.'
    })
    export default {
        data() {
            return {
                name: '',
                phone: '',
            }
        },
        validators: {
            name: function (value) {
                return Validator.value(value).required()
            },
            phone: function (value) {
                return Validator.value(value).required().digit()
            },
        },
        methods: {
            submit() {
                this.$validate()
                    .then(function (success) {
                        if (success) {
                            alert("성공했습니다.")
                        }
                    });
            }
        }
    }
</script>
<style>
    .join-box {
        width: 500px;
        min-height: 450px;
        margin: 30px auto;
        padding: 50px;
        border-radius: 20px;
        box-shadow: 10px 10px 10px #eee;
    }

    .join-box h2 {
        font-size: 40px;
        text-align: center;
        margin: 0 0 30px 0;
    }

    .error-message {
        margin: 10px 0 0 0;
        color: #E62929;
    }

    table td {
        vertical-align: top;
        padding: 10px;
    }

    .btn-box {
        margin: 50px 0 0 0;
    }

    .btn-box > a {
        display: block;
        width: 200px;
        background: #5FCA86;
        text-align: center;
        padding: 10px 15px;
        border-radius: 20px;
        margin: 0 auto;
    }

    .btn-box > a:hover {
        background: #4EBA75;
    }
</style>
