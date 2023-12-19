import "./App.css";

function GetCurrentDateTime() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1; // 0 - 11
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
}

function ArticleStyles() {
  return {
    container: "article",
    title: "article-title",
    body: "article-body",
    link: "article-link",
  };
}

function IntroSection() {
  const articleStyles = ArticleStyles();

  return (
    <div className={articleStyles.container}>
      <h3 className={articleStyles.title}>TechUp Thailand</h3>
      <p className={articleStyles.body}>
        เตรียมพบกับหลักสูตรปั้นคุณเป็น Software Developer ภายใน 4 เดือน
      </p>
      <a
        className={articleStyles.link}
        href="https://www.techupth.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        techupth.com
      </a>
      <p>{GetCurrentDateTime()}</p>
    </div>
  );
}

function LoginForm() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <IntroSection />
      <LoginForm />
    </div>
  );
}

export default App;
