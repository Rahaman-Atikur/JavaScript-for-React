const handleStorage = () => {
  const name = document.getElementById("name").value;
  localStorage.setItem("name", name);
};
