import "./App.css";

function Header() {
  return (
    <div>
      <Title text="title Header" />
      <h1>I am Header</h1>
    </div>
  );
}

function Content() {
  return (
    <div>
      <Title text="title Content" />
      <h1>I am Content</h1>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <Title text="title Footer" />
      <h1>I am Footer</h1>
    </div>
  );
}

function Title({ text }) {
  return <h1>{text}</h1>;
}

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
