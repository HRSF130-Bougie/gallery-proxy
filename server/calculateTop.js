window.addEventListener('resize', CalculateScroll);

function CalculateScroll(){
    const node = document.getElementById('MainImageContainer');
    const target = document.getElementById('booking-container-column');
    const top = 1000;
    if(node !== null && target !== null) {
        let bounds = node.getBoundingClientRect();
        const newTopValue = bounds.height - 771 + top;
        target.style.top = `${newTopValue}px`;
    }
}
