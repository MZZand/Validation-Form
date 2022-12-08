import './App.css';

function App() {

  return (
    <div className="App">
      <form>
      <input type="email" name="email" placeholder="E-mail"   />
      <input type="password" name="password" placeholder="password"  />
      <input type="text" name="username" placeholder="username"  />
      <input type="submit" value="Submit" className="submit"  />
      </form>
    </div>
  );
}

export default App;

const formLogin = () => {
  
  console.log("Callback function when form is submitted!");
  console.log("Form Values", values),
}
const {handleChange, values,errors,handleSubmit} = useForm(formLogin);