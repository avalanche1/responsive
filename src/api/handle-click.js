/**
 * @description: Selects a word using Selection api and removes it from dom; 1st removes characters.. 
 * ..to the left of the caret, then - to the right; from user viewpoint word is removed instantly.
 * @exampleInput: n/a
 * @exampleOutput: n/a
 * @pure: false: manipulates dom
 * @hasPassingTests: false
 */
function handle_click() {

	const caret = window.getSelection();
	caret.modify("extend", "forward", "word");
	caret.deleteFromDocument();
	caret.modify("extend", "backward", "word");
	caret.deleteFromDocument();
	
	return void 0;
}
