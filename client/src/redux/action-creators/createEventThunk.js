export function createEventThunk() {
  return async (e) => {
    e.preventDefault();
    const req = await fetch("/http://localhost:3001/event", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"test": "test"}), // body data type must match "Content-Type" header
    });
    const res = await req.json();
  };
}
