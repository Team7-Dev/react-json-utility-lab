# Component design

We will need 5 components:

| Component     | JSX Description | Description                                                        |
| ------------- | --------------- | ------------------------------------------------------------------ |
| App (default) |                 |                                                                    |
| JsonInput     | text area       | displays a labeled text area where the user can paste or type JSON |
| ActionButtons |                 |                                                                    |

## App

This is the main parent component.

It owns the state:

```console
const [rawJson, setRawJson] = useState("");
const [formattedJson, setFormattedJson] = useState("");
const [error, setError] = useState("");
```

It also owns the main behavior:

```console
format JSON
clear JSON
copy JSON
```

Why App owns this state: because multiple child components need access to it.

For example:

```markdown
JsonInput needs rawJson and setRawJson
JsonOutput needs formattedJson
ErrorMessage needs error
ActionButtons need functions like handleFormat and handleClear
```

## JsonInput

Purpose: lets the user paste/type JSON.

Props it receives:

```javascript
rawJson: string
onRawJsonChange: function
```

It renders something like:

```javascript
<textarea value={rawJson} onChange={...} />
```

This teaches controlled inputs.

Meaning:

```markdown
The text box value comes from React state.
When the user types, React state updates.
```

## ActionButtons

Purpose: buttons for actions.

Props:

```javascript
onFormat: function
onClear: function
onCopy: function
canCopy: boolean
```

It renders buttons like:

```console
Format JSON
Clear
Copy Output
```

## ErrorMessage

Purpose: shows JSON parsing errors.

Props:

```console
message: string
```

If there is no error, it renders nothing.

## State design

For Version 1, we only need three pieces of state.

```javascript
rawJson;
```

What the user typed/pasted.

```console
formattedJson
```

The clean formatted version.

```typescript
error;
```

The validation error message, if JSON is invalid.

The app flow looks like this:

```console
User types JSON
→ rawJson state updates

User clicks Format
→ app tries JSON.parse(rawJson)

If valid:
→ JSON.stringify(parsedObject, null, 2)
→ formattedJson state updates
→ error clears

If invalid:
→ error state updates
→ formattedJson clears
```

## Main functions

`handleFormat`

This is the core logic.

Conceptually:

```javascript
function handleFormat() {
  try {
    const parsed = JSON.parse(rawJson);
    const pretty = JSON.stringify(parsed, null, 2);

    setFormattedJson(pretty);
    setError("");
  } catch (err) {
    setFormattedJson("");
    setError("Invalid JSON");
  }
}
```

This is great because it connects directly to Python ideas too:

```
parse input
handle errors
produce output
```

---

`handleClear`

```javascript
function handleClear() {
  setRawJson("");
  setFormattedJson("");
  setError("");
}
```

This resets the app state.

---

`handleCopy`

Eventually:

```javascript
navigator.clipboard.writeText(formattedJson);
```

This copies the formatted output to the clipboard.

We can add this after the first working version.

---

## File structure

Since this is a learning project, I’d keep it simple:

```
json-editor-lab/
├── package.json
├── index.html
├── src/
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── components/
│       ├── JsonInput.tsx
│       ├── JsonOutput.tsx
│       ├── ActionButtons.tsx
│       └── ErrorMessage.tsx
```

We could start with everything in App.tsx, but I think this project is perfect for practicing components and props.

---

## Data flow

This is the most React-important part.

```
App owns state
↓
App passes state down to child components as props
↓
User interacts with child component
↓
Child calls function passed from App
↓
App updates state
↓
React re-renders UI
```

For example:

```
User types in JsonInput
→ JsonInput calls onRawJsonChange(newValue)
→ App updates rawJson
→ React re-renders JsonInput with new value
```

This is the same parent-child pattern from tic-tac-toe, but simpler.
