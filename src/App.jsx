import AddUser from "./components/users/AddUser";

function App() {
  return (
    <>
      <AddUser
        onAddUser={(username, age) => {
          console.log(username, age);
        }}
      />
    </>
  );
}

export default App;
