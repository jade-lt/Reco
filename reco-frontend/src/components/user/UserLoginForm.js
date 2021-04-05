export const UserLoginForm = () => {
    return (
        <div>
          <h1>Login</h1>
          <form>
            <label>
              Username:
              <input name="name" />
            </label>
            <label>
              Password:
              <input name="password" />
            </label>
            <button type="submit" >Submit</button>
          </form>
        </div>
      );
}