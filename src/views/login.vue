<template>
  <v-container class="text-center xxx" fluid="">
    <v-row>
      <v-col cols="6" class="mt-15 mx-auto">
        <div class="card-login">
          <img class="pikachu" src="@/assets/images/pikachu.png" />
          <v-card width="350" height="380" class="mx-auto">
            <v-card-text class="px-5">
              <p class="text-h3 mt-7 ml-n7">LOGIN</p>
              <v-form ref="form">
                <v-row>
                  <v-col cols="12" class="mt-7">
                    <v-text-field
                      v-model="loginForm.user"
                      :rules="userRules"
                      label="User"
                      required
                      autofocus
                      density="compact"
                      variant="outlined"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="loginForm.password"
                      :append-icon="showPassowrd ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="showPassowrd ? 'text' : 'password'"
                      :rules="passwordRules"
                      label="Password"
                      density="compact"
                      variant="outlined"
                      @click:append="showPassowrd = !showPassowrd"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <p class="text-error mb-0" v-show="msg !== ''">
                      a
                      {{ msg }}
                    </p>
                    <v-btn
                      color="primary"
                      rounded="lg"
                      class="px-10"
                      block
                      @click="validate"
                    >
                      LOGIN
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useUserStore } from "@/stores/UserStore";
import { mapState, mapActions } from "pinia";

export default {
  name: "login-view",
  data() {
    return {
      showPassowrd: false,
      loginForm: {
        user: "jorge",
        password: "123456",
      },
      msg: "",
      userRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "User must be less than 10 characters",
      ],
      passwordRules: [(v) => !!v || "Password is required"],
    };
  },
  computed: {
    ...mapState(useUserStore, {
      users: "users",
    }),
  },

  methods: {
    async validate() {
      this.msg = "";
      const { valid } = await this.$refs.form.validate();
      if (valid) {
        const hasAccess = !!this.users.find(
          (user) =>
            user.user === this.loginForm.user.trim() &&
            user.password === this.loginForm.password.trim()
        );
        if (hasAccess) {
          this.login(true);
          this.$router.push("/home");
        } else {
          this.msg = "The username or password is incorrect";
        }
      }
    },
    ...mapActions(useUserStore, ["login"]),
  },
};
</script>
<style>
.xxx {
  background-image: radial-gradient(
    circle,
    #e43b47,
    #b62932,
    #a6252e,
    #972129,
    #881d25
  );
  height: 100%;
  width: 100%;
}

.card-login {
  position: relative;
  margin-top: 80px;
}

.pikachu {
  width: 170px;
  position: absolute;
  left: 140px;
  top: -100px;
  z-index: 10000000;
}
</style>
