
type JsonInputProps = {
  rawJson: string;
  onRawJsonChange: (value: string) => void;
};

export default function JsonInput({ rawJson, onRawJsonChange }: JsonInputProps) {
  return (
<section className="editor-section">
  <label className="editor-label" htmlFor="json-input">
    JSON Input
  </label>

      <textarea
          id="json-input"
    className="json-textarea"
        value={rawJson} //means the text area’s value comes from React state
        onChange={(event) => onRawJsonChange(event.target.value)} //this part updates the parent state when the user types. 
        // When the text area changes, take the new text from the event, then send that text back up to the parent component.
        placeholder='Paste JSON here, for example: {"name":"Vince"}' 
        rows={16}
        cols={60}
      />
    </section>
  );
}
