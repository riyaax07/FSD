function Book() {
  const image = React.createElement("img", {
    
    width: "100px",
    height: "100px"
  }, null);

  const title = React.createElement("h2",
    { style: { color: "red" } }, "Title: react.js"
  );

  const price = React.createElement("h2",
    { style: { color: "green" } }, "Price: 465/-"
  );

  const btn = React.createElement("button", 
    { style: { color: "blue" } }, "Add to cart"
  );

  const div = React.createElement("div",
    { className: "book" }, [image, title, price, btn]
  );

  return div;
}

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(React.createElement(Book));
