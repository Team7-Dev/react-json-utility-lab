import { useState } from "react";
import JsonInput from "./components/JsonInput";
import "./App.css"

export default function App() {
  // State to hold the raw JSON input, formatted JSON output, and any error messages. Only ran once when the component is first rendered. The state is preserved across re-renders..
  const [rawJson, setRawJson] = useState("");
  const [formattedJson, setFormattedJson] = useState("");
  const [error, setError] = useState("");

  function handleFormat() {
    try {
      if (!rawJson.trim()) {
        setError("Input is empty. Please enter valid JSON.");
        return;
      }
      const parsedJson = JSON.parse(rawJson);
      const prettyJson = JSON.stringify(parsedJson, null, 2);

      setRawJson(prettyJson); //update the state with the formatted JSON and clear any previous error messages. This will trigger a re-render of the component, displaying the formatted JSON in the output section.

      //update the state with the formatted JSON and clear any previous error messages. This will trigger a re-render of the component, displaying the formatted JSON in the output section.
      setFormattedJson(prettyJson);

      // Clear any previous error messages
      setError("");
    } catch {
      setFormattedJson("");
      setError("Invalid JSON. Please check your syntax.");
    }
  }

  function handleClear() {
    setRawJson("");
    setFormattedJson("");
    setError("");
  }
  
  function handleCopy() {
    if (formattedJson) {
      navigator.clipboard.writeText(formattedJson);
    } else {
      navigator.clipboard.writeText(rawJson);
    }
  }

  function handleMinify() {
    try {
      if (!rawJson.trim()) {
        setError("Input is empty. Please enter valid JSON.");
        return;
      }
      const parsedJson = JSON.parse(rawJson);
      const minifiedJson = JSON.stringify(parsedJson);

      setRawJson(minifiedJson); //update the state with the minified JSON and clear any previous error messages. This will trigger a re-render of the component, displaying the minified JSON in the output section.

      //update the state with the minified JSON and clear any previous error messages. This will trigger a re-render of the component, displaying the minified JSON in the output section.
      setFormattedJson(minifiedJson);

      // Clear any previous error messages
      setError("");
    } catch {
      setFormattedJson("");
      setError("Invalid JSON. Please check your syntax.");
    }
  } 

  return (
<main className="app">
  <header className="app-header">
    <h1>JSON Editor Lab</h1>
    <p>Paste, format, minify, and copy JSON.</p>
  </header>

      <JsonInput rawJson={rawJson} onRawJsonChange={setRawJson} />

      <div className="button-row">
        <button className="primary-button" onClick={handleFormat}>Format JSON</button>
        <button  className="primary-button" onClick={handleClear}>Clear</button>
        <button className="primary-button"  onClick={handleCopy}>Copy</button>
        <button className="primary-button" onClick={handleMinify}>Minify</button>
      </div>

  {error && <p className="message error-message">{error}</p>}

    </main>
  );
}