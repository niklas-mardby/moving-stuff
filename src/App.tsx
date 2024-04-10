import { useEffect, useState } from "react";
import "./App.scss";

// transition & animation
// className och useState (animation + keyframes)
// bara CSS? hover, active

// style={ } inline styling i React

// useEffect

function App() {
	const [chosen, setChosen] = useState(false);
	const [stateWidth, setWidth] = useState(100);
	const [removed, setRemove] = useState(false);
	const [animateLorem, setLoremClass] = useState<string>("");

	useEffect(() => {
		// start animation = lägga på en klass som har en animation
		if (removed) {
			setLoremClass("animate");

			setTimeout(() => {
				// ta bort = göm med CSS
				setLoremClass("removed");

				// ta bort = dispatch för att säga till global state att ta bort
			}, 1000);
		}

		// efter animation gör ngt mer = starta en timer, när timern är klar är animation klar
	}, [removed]);

	return (
		<>
			<h1>moving-stuff</h1>
			<div
				className={`lorem ${animateLorem}`}
				onClick={() => {
					setRemove(true);
				}}
			>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum alias
				dolores quos iure, doloribus nam velit a tempore. Distinctio
				adipisci saepe ad quo sed autem dignissimos voluptatum eius, cum at.
			</div>
			<div className="test">Test</div>
			<div
				className={`new`}
				onClick={() => {
					setChosen(!chosen);
				}}
			>
				New div
			</div>
			<div className={`new ${chosen && "newColor"}`}>Gorilla</div>
			<hr />
			<input
				type="number"
				name="width"
				id="width"
				value={stateWidth}
				onChange={(e) => {
					setWidth(Number(e.target.value));
				}}
			/>
			<div className="width" style={{ width: stateWidth }}>
				demo
			</div>
		</>
	);
}

export default App;
