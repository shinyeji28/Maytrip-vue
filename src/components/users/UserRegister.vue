<script setup>
import { ref } from "vue";
import { signupApi } from "@/api/user";
import { useRouter } from "vue-router";

const router = useRouter();
const userForm = ref({
  username: "",
  password: "",
  email: "",
  name: "",
});

// 입력 폼 규칙
const rules = ref({
  username: [
    (value) => {
      if (value) return true;
      return "Username is requred.";
    },
    (value) => {
      if (true) return true; // duplicate 검사 필요
      return "Username already taken. Please try another one.";
    },
  ],
  password: [
    (value) => {
      if (value) return true;
      return "Password is requred.";
    },
  ],
  name: [
    (value) => {
      if (value) return true;
      return "Name is required.";
    },
    (value) => {
      if (value?.length <= 10) return true;
      return "Name must be less than 10 characters.";
    },
  ],
  email: [
    (value) => {
      var regex = /^[a-z0-9]+@[a-z.-]+\.[a-z]+$/i;
      if (regex.test(value)) return true;
      return "Must be a valid e-mail.";
    },
  ],
});

const clickSignup = async () => {
  // 회원가입 버튼 클릭 시
  if (
    !userForm.value.username ||
    !userForm.value.password ||
    !userForm.value.email ||
    !userForm.value.name
  ) {
    return; // 입력폼 비었는지 확인
  }

  try {
    const response = await signupApi(userForm.value);
    console.log("signup 성공 !!");
    router.push({ name: "user-login" });
  } catch (error) {
    console.log(error);
    alert("회원가입을 다시 시도해주세요.");
  }
};
</script>

<template>
  <div class="container">
    <img src="@/assets/biglogo.png" width="300" alt="..." id="logo" />
    <v-sheet width="300" class="mx-auto">
      <v-form @submit.prevent="clickSignup">
        <v-text-field
          v-model="userForm.username"
          :rules="rules.username"
          label="Username"
        ></v-text-field>
        <v-text-field
          v-model="userForm.password"
          :rules="rules.password"
          label="Password"
          type="password"
        ></v-text-field>
        <v-text-field
          v-model="userForm.email"
          :rules="rules.email"
          label="E-mail"
        ></v-text-field>
        <v-text-field
          v-model="userForm.name"
          :rules="rules.name"
          label="Name"
        ></v-text-field>
        <v-btn type="submit" block class="mt-2 btn">Signup</v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15vh 15vw;
  padding: 0;
  width: 500px;
  height: 550px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.title {
  font-size: 50px;
  font-weight: 700;
  margin: 50px 0px;
}

.btn:hover {
  background-color: #41644a;
  color: white;
  font-weight: 800;
}
</style>
