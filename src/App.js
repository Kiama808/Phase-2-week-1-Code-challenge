import "./App.css";
import Form from "./components/Forms.jsx";
import Search from "./components/SearchBar.jsx";
import Table from "./components/Tables.jsx";
import { useState } from 'react';
function App() {
  const [formDataInput, setFormInput] = useState([]);

  const handleFormSubmitButton = (formData) => {
    setFormInput([...formDataInput, formData]);
  };

  return (
    <div>
      <header>
        <h1 style={{background:"purple",textAlign:"center"}}>The Royal Bank of Flatiron</h1>
  <Search/>
      </header>
      <Form onSubmit={handleFormSubmitButton} />
      <Table formData={formDataInput} />
    </div>
  );
}

export default App