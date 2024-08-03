import './css/App.scss';
import Logo from './components/Logo'
import Title from './components/Title'
import Message from './components/Message'
import Link from './components/Link'
import Button from './components/Button'
import InlineStyle from './components/InlineStyle'
import CssModules from './components/CssModules'
import StyledJsx from './components/StyledJsx'
import StyledComponents from './components/StyledComponents'
import Emotion from './components/Emotion'
import TailwindCss from './components/TailwindCss'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />

        <Title color={"red"}>こんにちは！</Title>

        <Message color={"red"}>
          Edit <code>src/App.js</code> and save to reload.
        </Message>

        <Link
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>

        <Button />

        <InlineStyle />

        {/* CSS Module */}
        <CssModules />

        {/* Styled JSX */}
        <StyledJsx />

        {/* Styled Components */}
        <StyledComponents />

        {/* Emotion */}
        <Emotion />

        {/* Tailwind CSS */}
        {/* https://tailwindcss.com/docs/installation */}
        <TailwindCss />
      </header>
    </div>
  );
}

export default App;
