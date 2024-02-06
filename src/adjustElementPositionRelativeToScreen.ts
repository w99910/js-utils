export default function adjustElementPositionRelativeToScreen(element:HTMLElement, shouldCenter:boolean = false) {
    return new Promise((resolve) => {
        // Get bounding rect of element
        let screenWidth = window.innerWidth;
        let screenHeight = window.innerHeight;
        let boundingRect = element.getBoundingClientRect();
        let margin = {
            top: 0,
            left: shouldCenter ? -boundingRect.width / 2 : 0,
        }

        if (boundingRect.left + boundingRect.width >= screenWidth) {
            margin.left -= boundingRect.left + boundingRect.width - screenWidth;
        }

        // Check if bottom offset of element is below screen.
        if (boundingRect.top + boundingRect.height >= screenHeight) {
            // compute distance between bottom and screen height
            margin.top -= boundingRect.top + boundingRect.height - screenHeight;
        }

        element.style.marginTop = margin.top + 'px';
        element.style.marginLeft = margin.left + 'px';

        resolve(element)
    });
}