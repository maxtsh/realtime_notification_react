import { Container } from "./Login.styles";
import useLogin from "./useLogin";

const Login: React.FC = () => {
  const { usernameRef, passwordRef, handleSubmit } = useLogin();

  return (
    <Container>
      <div className="left">
        <div className="left__info">
          <img
            src="/bell.png"
            alt="Notification_Icon"
            className="left__info__logo"
          />
          <h1 className="left__info__title">Notification</h1>
          <p className="left__info__text">
            Sign Up for this application is free! Therefore you can use any
            username to log in and enjoy the test!
          </p>
        </div>
      </div>
      <div className="right">
        <div className="right__content">
          <div className="right__content__info">
            <h1 className="right__info__title">Welcome!</h1>
            <p className="right__info__text">
              You can easily log in into your account by the below form.
            </p>
          </div>
          <form className="right__content__form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              ref={usernameRef}
              placeholder="Enter your username"
              className="right__content__form__input"
            />
            {/* <input
              type="password"
              name="password"
              ref={passwordRef}
              placeholder="Enter your password"
              className="right__content__form__input"
            /> */}
            <button type="submit" className="right__content__form__submit">
              Login
            </button>
          </form>
        </div>
        <div className="right__credit">
          <p className="right__credit__text">
            Developed by{" "}
            <a
              href="https://github.com/maxtsh"
              target="_blank"
              className="right__credit__text__name"
            >
              MaxTsh
            </a>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Login;
