function navigate(pageId) {
    console.log("Navigating to:", pageId); // Debugging log
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        console.log(pageId, "activated");
    } else {
        console.error("Page not found:", pageId);
    }
}

function revealSurprise() {
    console.log("Reveal Surprise function triggered!");
    const surpriseContent = document.getElementById('surprise-content');

    if (surpriseContent) {
        if (surpriseContent.classList.contains('hidden')) {
            surpriseContent.classList.remove('hidden');
            surpriseContent.style.display = 'block';
            console.log("Surprise revealed!");
        } else {
            surpriseContent.classList.add('hidden');
            surpriseContent.style.display = 'none';
            console.log("Surprise hidden!");
        }
    } else {
        console.error("Surprise content not found!");
    }
}
