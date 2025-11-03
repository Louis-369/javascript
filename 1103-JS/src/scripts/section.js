import axios from "axios";

function changeSection() {
  return {
    change_section: "signup",
    email: "",
    nickname: "",
    password: "",
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
          const resp = await axios.post(
            "https://todoo.5xcamp.us/users",
            userData
          );
          console.log(resp);
        } catch (err) {
          alert(err.response.data.message);
        }
      }
    },
    gotoLogin() {
      this.change_section = "login";
    },
    gotoSignup() {
      this.change_section = "signup";
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
  };
}
export { changeSection };
