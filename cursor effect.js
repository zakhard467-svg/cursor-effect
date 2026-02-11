document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector('.title');
    const cursor = document.createElement('div');
    const cursorWidth = 25;
    const cursoreHeight = 25;
    const cursoreWidthHover = 100;
    const cursoreHeightHover = 100;
    cursor.classList.add("cursore");
    document.body.appendChild(cursor);

    // trecking mouse movement

    document.addEventListener("mousemove", (e) => {
        let x = e.clientX;
        let y = e.clientY;


        const rect = cursor.getBoundingClientRect();
        const
        inTitle = x > rect.left && x < rect.right && y > rect.top && y < rect.bottom;

        // changong cursor style when hovering over the text

        if (inTitle) {
            cursor.style.top = (y - cursoreHeightHover / 2) + "px";
            cursor.style.left = (x - cursoreWidthHover / 2) + "px";
            cursor.style.width = cursoreWidthHover + "px";
            cursor.style.height = cursoreHeightHover + "px";
        } else {
            cursor.style.top = (y - cursoreHeight / 2) + "px";
            cursor.style.left = (x - cursorWidth / 2) + "px";
            cursor.style.width = cursorWidth + "px";
            cursor.style.height = cursoreHeight + "px";

            // resetting cursor style when not hovering over the text
        }
    })
})