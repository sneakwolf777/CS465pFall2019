interface Guest {
    coming: boolean,
    name: string
}
export class Codelab {
    constructor(public guests: Guest[]) {
    }

    getGuestsComing() {
        return this.guests.filter(guest => guest.coming);
    }
}



// Use this file for reference.
const guests: Guest[] = [
    {
        coming: true,
        name: `Sir Isaac Newton`
    },
    {
        coming: true,
        name: `Marie Curie`
    },
    {
        coming: true,
        name: `Albert Einstein`
    },
    {
        coming: false,
        name: `Charles Darwin`
    }];

const codelab = new Codelab(guests);

// Angular is so much better than this:
document.body.innerHTML = '<ul>' +
    codelab.getGuestsComing().map((guest: Guest) => `<li>${guest.name}</li>`).join('') +
    '</ul>';