import axios from "axios";

function changeSection() {
  return {
    change_section: "",
    email: "",
    nickname: "",
    password: "",
    isLogin: false,

    init() {
      const token = localStorage.getItem("todoToken");
      if (token) {
        this.isLogin = true;
      }

      if (this.isLogin) {
        this.gotoTask();
      } else {
        this.gotoSignup();
      }
    },
    async doLogIn() {
      const { email, password } = this;
      // 打API
      if (email != "" && password != "") {
        // 打API
        const userData = {
          user: {
            email,
            password,
          },
        };

        try {
          const resp = await axios.post(
            "https://todoo.5xcamp.us/users/sign_in",
            userData
          );
          const token = resp.headers.authorization;
          if (token) {
            localStorage.setItem("todoToken", token);
            this.isLogin = true;
          }
          this.resetForm();
          this.gotoTask();
        } catch (err) {
          console.log(err);
        }
      }
    },

    async doSignUp() {
      const { email, nickname, password } = this;
      // const email= this.email
      // const nickname=this.nicknam
      // const password=this.password
      if (email != "" && nickname != "" && password != "") {
        // 打API
        const userData = {
          user: {
            email,
            nickname,
            password,
          },
        };

        try {
          await axios.post("https://todoo.5xcamp.us/users", userData);
          this.resetForm();
          this.gotoLogin();
        } catch (err) {
          alert(err.response.data.message);
        }
      }
    },
    resetForm() {
      this.email = "";
      this.password = "";
      this.nickname = "";
    },
    gotoLogin() {
      this.change_section = "login";
    },
    gotoSignup() {
      this.change_section = "signup";
    },
    gotoTask() {
      this.change_section = "task";
    },
    showLogin() {
      return this.change_section == "login";
    },
    showSignup() {
      return this.change_section == "signup";
    },
    showTask() {
      return this.change_section == "task";
    },
    async Logout() {
      // API
      const token = localStorage.getItem("todoToken");

      if (token) {
        const config = {
          headers: {
            Authorization: token,
          },
        };
        try {
          const resp = await axios.delete(
            "https://todoo.5xcamp.us/users/sign_out",
            config
          );
          localStorage.removeItem("todoToken");
          this.isLogin = false;
          this.gotoLogin();
        } catch (err) {
          console.log(err);
        }
      }
    },
  };
}
export { changeSection };
