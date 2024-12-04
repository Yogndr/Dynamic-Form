import React, { useState } from "react";
import DynamicForm from "./components/DynamicForm";
import DynamicTable from "./components/DynamicTable";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [formData, setFormData] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleFormSubmit = (data) => {
    setFormData([...formData, data]);
  };

  const handleDelete = (index) => {
    const updatedData = formData.filter((_, i) => i !== index);
    setFormData(updatedData);
  };

  return (
    <div className="App">
      <Header />
      <ProgressBar progress={progress} />
      <DynamicForm onSubmit={handleFormSubmit} setProgress={setProgress} />
      <DynamicTable data={formData} onDelete={handleDelete} />
      <Footer />
    </div>
  );
}

export default App;
