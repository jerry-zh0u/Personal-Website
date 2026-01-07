let pos = 10;
let direction = 1;
const speed = 0.2;

function setupFEBImageSlide(){
    const febImageList = [
        {src: "images/segment-board-3d-view.png", description: "Segment Board 3d View"},
        {src: "images/segment-board-top-view.png", description: "Segment Board 1st Layer (Power Traces + Signal Traces)"},
        {src: "images/segment-board-layer-2.png", description: "Segment Board 2nd Layer (Minimal Power Traces + Signal Traces)"},
        {src: "images/segment-board-layer-3.png", description: "Segment Board 3rd Layer (Ground Layer)"},
        {src: "images/segment-board-bottom-layer.png", description: "Segment Board 4th Layer (Signal Traces)"}
    ];
    // const febSlide = document.getElementById("slideshow");
    const febSlide = document.querySelector(".feb-slideshow")
    const febImg = febSlide.querySelector(".img-slideshow");
    const febText = febSlide.querySelector(".description-slideshow")

    const imgNext = febSlide.querySelector(".right");
    const imgPrev = febSlide.querySelector(".left");

    let febImageIndex = 0;

    function updateIndex(index){
        febImageIndex = index

        febImg.src = febImageList[index].src;
        febText.textContent = febImageList[index].description;

        if(febImageIndex === 0){
            imgPrev.classList.add("hidden");
        }else{
            imgPrev.classList.remove("hidden");
        }

        if(febImageIndex === febImageList.length - 1){
            imgNext.classList.add("hidden");
        }else{
            imgNext.classList.remove("hidden");
        }
    }

    imgNext.onclick = () => updateIndex(febImageIndex + 1);
    imgPrev.onclick = () => updateIndex(febImageIndex - 1);

    updateIndex(febImageIndex)
}

function setupESBImageSlide(){
    const esbImageList = [
        {src: "images/RPM-real.jpg", description: "Physical Random Positioning Machine"},
        {src: "images/RPM-3d-view.png", description: "RPM 3d-view"},
        {src: "images/RPM-layer1.png", description: "RPM Board 1st Layer (Power Traces + Signal Traces)"},
        {src: "images/RPM-layer2.png", description: "RPM Board 2nd Layer (Signal Traces)"}
    ];
    // const febSlide = document.getElementById("slideshow");
    const esbSlide = document.querySelector(".esb-slideshow")
    const esbImg = esbSlide.querySelector(".img-slideshow");
    const esbText = esbSlide.querySelector(".description-slideshow")

    const imgNext = esbSlide.querySelector(".right");
    const imgPrev = esbSlide.querySelector(".left");

    let esbImageIndex = 0;

    function updateIndex(index){
        esbImageIndex = index

        esbImg.src = esbImageList[index].src;
        esbText.textContent = esbImageList[index].description;

        if(esbImageIndex === 0){
            imgPrev.classList.add("hidden");
        }else{
            imgPrev.classList.remove("hidden");
        }

        if(esbImageIndex === esbImageList.length - 1){
            imgNext.classList.add("hidden");
        }else{
            imgNext.classList.remove("hidden");
        }
    }

    imgNext.onclick = () => updateIndex(esbImageIndex + 1);
    imgPrev.onclick = () => updateIndex(esbImageIndex - 1);

    updateIndex(esbImageIndex)
}

function setupHSImageSlide(){
    const hsImageList = [
        {src: "images/robotics-team-pic.jpg", description: ""},
        {src: "images/robotics-robot.jpg", description: ""},
    ];
    // const febSlide = document.getElementById("slideshow");
    const hsSlide = document.querySelector(".hs-slideshow")
    const hsImg = hsSlide.querySelector(".img-slideshow");
    const hsText = hsSlide.querySelector(".description-slideshow")

    const imgNext = hsSlide.querySelector(".right");
    const imgPrev = hsSlide.querySelector(".left");

    let hsImageIndex = 0;

    function updateIndex(index){
        hsImageIndex = index

        hsImg.src = hsImageList[index].src;
        hsText.textContent = hsImageList[index].description;

        if(hsImageIndex === 0){
            imgPrev.classList.add("hidden");
        }else{
            imgPrev.classList.remove("hidden");
        }

        if(hsImageIndex === hsImageList.length - 1){
            imgNext.classList.add("hidden");
        }else{
            imgNext.classList.remove("hidden");
        }
    }

    imgNext.onclick = () => updateIndex(hsImageIndex + 1);
    imgPrev.onclick = () => updateIndex(hsImageIndex - 1);

    updateIndex(hsImageIndex)
}

function cowAnimate(){
    const cow = document.getElementById("cow");
    const cowWidth = cow.offsetWidth;
    const deadband = 5;

    pos += speed * direction

    if(pos > window.innerWidth - cowWidth - deadband || pos < deadband){
        direction *= -1

        if(direction === 1){
            cow.style.transform = "scaleX(1)"
        }
        else{
            cow.style.transform = "scaleX(-1)"
        }
    }
  
  cow.style.left = pos + 'px';

  requestAnimationFrame(cowAnimate);
}

function fetchLastUpdated() {
    const githubExists = document.getElementById("last-updated");
    if(!githubExists){
        return;
    }
    fetch('https://api.github.com/repos/jerry-zh0u/Personal-Website/commits?per_page=1')
        .then(response => response.json())
        .then(data => {
            if (!data || data.length === 0) return;

            const lastCommit = data[0];
            const commitInfo = lastCommit.commit;

            const date = new Date(commitInfo.committer.date);

            const options = {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                timeZoneName: 'short',
                hour12: true
            };
        const formatted = date.toLocaleString(undefined, options);

        document.getElementById("last-updated").textContent =
            formatted;
        })
        .catch(err => console.error("Error fetching GitHub commits:", err));
}

document.addEventListener("DOMContentLoaded", fetchLastUpdated);
document.addEventListener("DOMContentLoaded", cowAnimate)
document.addEventListener("DOMContentLoaded", setupFEBImageSlide)
document.addEventListener("DOMContentLoaded", setupESBImageSlide)
document.addEventListener("DOMContentLoaded", setupHSImageSlide)

document.getElementById("year").textContent = new Date().getFullYear();