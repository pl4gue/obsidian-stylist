import { Plugin } from "obsidian";

const CLASSNAME_TAG = "classname:";

export default class extends Plugin {
	onload() {
		// Render 'style' code blocks
		this.registerMarkdownCodeBlockProcessor("style", (source, element) => {
			element.createEl("style", {
				text: source,
			});
		});

		// Insert the class in
		let className: string | null = null;

		this.registerMarkdownPostProcessor((element) => {
			// skips elements with the 'stylist-skip' class
			// if (element.hasClass("stylist-skip")) return;

			// adds the class to the element and clears the class string
			if (className) {
				element.classList.add(...className.split(/\s+/));
				className = null;
			}

			// gets the code blocks that match the CLASSNAME_TAG
			const classBlock = [...element.querySelectorAll("code")].find(
				(codeEl) => codeEl.innerText.trim().startsWith(CLASSNAME_TAG),
			);
			if (classBlock) {
				className = classBlock.innerText
					.replace(CLASSNAME_TAG, "")
					.trim(); // sets the className to be set in the next element
				classBlock.parentElement?.remove(); // removes the classBlock element from render
			}
		});
	}
}
