<script lang="ts" setup>
const flag = ref(false)
const form = ref({
    username: '',
    password: '',
    email: ''
})
</script>

<template>
    <div class="box flex justify-center items-center">
        <div class="login-box">
            <div
                class="float-box flex flex-col justify-center items-center"
                :class="flag ? 'left' : 'right'"
            >
                <!-- 圆型 -->
                <div class="circle bottom--80%" :style="{ left: flag ? '30%' : '-30%' }"></div>
                <div class="circle top--70%" :style="{ left: flag ? '-50%' : '30%' }"></div>
                <div
                    class="circle2"
                    :style="{ top: flag ? '90%' : '10%', left: flag ? '-10%' : '-30%' }"
                ></div>
                <!-- 表单内容 -->
                <h2>{{ flag ? '欢迎回来 !' : '你好朋友 !' }}</h2>
                <p font="size-14px" color="#999">
                    {{
                        flag
                            ? '要与我们保持联系，请使用您的个人信息登录'
                            : '输入您的个人详细信息并与我们一起开始旅程'
                    }}
                </p>
                <button class="primary-btn" @click="flag = !flag">
                    {{ flag ? '已有账号' : '注册账号' }}
                </button>
            </div>
            <div
                class="content left-0"
                :style="{
                    opacity: flag ? '0' : '1',
                    left: flag ? '30%' : '0',
                    zIndex: flag ? '-1' : '0'
                }"
            >
                <h2 class="title">Sign in to Website</h2>
                <span class="color-#999">or use email for registration</span>
                <el-form :model="form">
                    <el-form-item>
                        <el-input v-model="form.username" placeholder="用户名" />
                    </el-form-item>
                    <el-form-item>
                        <el-input
                            v-model="form.password"
                            type="password"
                            show-password
                            placeholder="密码"
                        />
                    </el-form-item>
                    <div class="text-center">
                        <button class="primary-btn">立即登录</button>
                    </div>
                </el-form>
            </div>

            <div
                class="content left-30%"
                :style="{
                    opacity: flag ? '1' : '0',
                    left: flag ? '30%' : '0',
                    zIndex: flag ? '0' : '-1'
                }"
            >
                <h2 class="title">Create Account</h2>
                <span class="color-#999">or use email for registration</span>
                <el-form>
                    <el-form-item>
                        <el-input v-model="form.username" placeholder="Name" />
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="form.password" placeholder="Email" />
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="form.email" type="password" placeholder="Password" />
                    </el-form-item>
                    <div class="text-center">
                        <button class="primary-btn">立即注册</button>
                    </div>
                </el-form>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.box {
    height: 100vh;
    width: 100vw;
    background-color: #ecf0f3;
    .login-box {
        overflow: hidden;
        position: relative;
        margin: auto;
        height: 70%;
        width: 70%;
        background-color: #ecf0f3;
        border-radius: 10px;
        box-shadow:
            10px 10px 10px #d1d9e6,
            -10px -10px 10px #f9f9f9;
        .float-box {
            z-index: 2;
            overflow: hidden;
            position: absolute;
            box-sizing: border-box;
            height: 100%;
            width: 30%;
            padding: 40px;
            background-color: #ecf0f3;
            box-shadow:
                4px 4px 10px #d1d9e6,
                -4px -4px 10px #f9f9f9;
            transition: 1.5s;
            text-align: center;
            .circle {
                z-index: 3;
                position: absolute;
                width: 150%;
                // height: 50vh;
                padding-top: 150%;
                border-radius: 50%;
                background-color: #ecf0f3;
                box-shadow:
                    inset 8px 8px 12px #d1d9e6,
                    inset -8px -8px 12px #f9f9f9;
                transition: 5s;
            }
            .circle2 {
                z-index: 3;
                position: absolute;
                width: 30%;
                padding-top: 30%;
                border-radius: 50%;
                background-color: #ecf0f3;
                box-shadow:
                    inset 8px 8px 12px #d1d9e6,
                    inset -8px -8px 12px #f9f9f9;
                transition: 5s;
            }
        }
        .left {
            left: 0;
        }
        .right {
            left: calc(100% - 30%);
        }

        .content {
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 70%;
            height: 100%;
            transition: 1.5s;
            .el-form {
                width: 40%;
                margin: 40px auto;
                :deep(.el-input__wrapper) {
                    height: 40px;
                    font-size: 13px;
                    background-color: #ecf0f3;
                    box-shadow:
                        inset 2px 2px 4px #d1d9e6,
                        inset -2px -2px 4px #f9f9f9;
                    &::placeholder {
                        color: #a0a5a8;
                    }
                }
            }
        }
    }
}

// 按钮
.primary-btn {
    width: 160px;
    height: 40px;
    margin-top: 40px;
    border: 0;
    font-weight: 500;
    letter-spacing: 2px;
    color: #5a84a2;
    background-color: #ecf0f3;
    font-size: 14px;
    border-radius: 60px;
    cursor: pointer;
    box-shadow:
        -2px -2px 8px rgba(255, 255, 255, 1),
        -2px -2px 12px rgba(255, 255, 255, 0.5),
        inset 2px 2px 4px rgba(255, 255, 255, 0.1),
        2px 2px 8px rgba(0, 0, 0, 0.15);
    &:hover {
        box-shadow:
            inset -2px -2px 8px rgba(255, 255, 255, 1),
            inset -2px -2px 12px rgba(255, 255, 255, 0.5),
            inset 2px 2px 4px rgba(255, 255, 255, 0.1),
            inset 2px 2px 8px rgba(0, 0, 0, 0.15);
    }
}
</style>
