// Add your code here

function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const newItem = data.id;
        const newElement = document.createElement("p");
        newElement.textContent = newItem;
        document.body.appendChild(newElement);
      })
  
      .catch((error) => {
        const newElement = document.createElement("p");
        newElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(newElement);
      });
  }
  