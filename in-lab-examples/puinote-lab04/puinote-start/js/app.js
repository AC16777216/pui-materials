class Notecard{
    noteTitle;
    noteBody;
    noteImageURL;

    constructor(imageURL, title, body, elementID) {
        this.noteTitle = title;
        this.noteBody = body;
        this.noteImageURL = imageURL;
        this.element = elementID;

        const btnDelete = this.element.querySelector('.icon-delete');

        btnDelete.onclick = this.removeNote.bind(this);

        this.updateElement();
    }

    updateElement() {
        const noteImageElement = this.element.querySelector('.noteCard-thumbnail');
        const noteTitleElement = this.element.querySelector('.note-title');
        const noteBodyElement = this.element.querySelector('.note-body');
	    const noteFooterElement = this.element.querySelector('.notecard-footer');

        noteImageElement.src = this.noteImageURL;
        noteTitleElement.src = this.noteTitle;
        noteBodyElement.innerText = this.noteBody;
        noteFooterElement.innerText = this.noteFooter;
    }

    removeNote() {
        this.element.remove();
    }
}

// Create 1 of 3 notecard objects
let notecardOne = new Notecard('assets/warhol-frog.png', "Frog", 
    "Something about frog", "#notecard-one");
