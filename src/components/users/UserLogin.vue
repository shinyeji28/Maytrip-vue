<script setup>
import { useAuthStore } from "@/stores/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const { login } = useAuthStore();

const userForm = ref({});

// 입력 폼 확인 용 규칙
const rules = ref({
  username: [
    (value) => {
      if (value) return true;
      return "Username is requred.";
    },
  ],
  password: [
    (value) => {
      if (value) return true;
      return "Password is requred.";
    },
  ],
});

const clickLogin = async () => {
  // 로그인 버튼 클릭시
  if (!userForm.value.username || !userForm.value.password) {
    return; // 입력폼 값 확인
  }
  try {
    await login(userForm.value);
    console.log("login 성공 !!");
    router.push({ path: "/" });
  } catch (error) {
    console.log(error);
    alert("로그인을 다시 시도해주세요.");
  }
};
</script>

<template>
  <div class="login">
    <img src="@/assets/biglogo.png" width="300" alt="..." id="logo" />
    <v-sheet width="300" class="mx-auto">
      <v-form @submit.prevent="clickLogin">
        <v-text-field
          v-model="userForm.username"
          label="Username"
          :rules="rules.username"
        ></v-text-field>
        <v-text-field
          v-model="userForm.password"
          label="Password"
          type="password"
          :rules="rules.password"
        ></v-text-field>
        <v-btn type="submit" block class="mt-2 btn">Login</v-btn>
      </v-form>
      <div class="row center">
        <v-btn variant="plain" @click="router.push({ name: 'user-pass' })">
          비밀번호를 잊어버리셨나요?
        </v-btn>
      </div>
    </v-sheet>
  </div>
</template>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15vh 15vw;
  padding: 0;
  width: 500px;
  height: 500px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.title {
  font-size: 50px;
  font-weight: 700;
  margin: 50px 0px;
}

.row {
  display: flex;
  flex-direction: row;
}
.col {
  display: flex;
  flex-direction: col;
}

.center {
  width: 300px;
  justify-content: center;
  margin-top: 20px;
}

.btn:hover {
  background-color: #e86a33;
  color: white;
  font-weight: 800;
}
</style>
