let pos = 10;
let direction = 1;
const speed = 0.2;

const ib_messages_title = {
    cs_msg:`Analysis on K-d Trees vs Quadtrees`,
    physics_msg:`Polarized Double Slit Experiment`,
    math_msg:`Analysis on Fourier Series and Transforms`,
    chem_msg:`Effect of Catalyst on the Belousov-Zhabotinsky Reaction`
}
const ib_messages_content = {
    cs_msg: `
     <p style = "margin-left: 50px; margin-bottom: 10px;">                                
                                To optimize space and query efficiency, each tree was initially constructed by partitioning around the median of the dataset, followed by periodic rebalancing.
                                Median selection was implemented using a modified <a href = "https://en.wikipedia.org/wiki/Median_of_medians">median of medians algorithm</a> to achieve a deterministic performance without recursive subdivision.
                                Through benchmarking across varying dataset densities and query types, I observed that performance depended strongly on dimensionality and rebalancing strategy.
                                While quadtrees performed competitively in low-dimensional, structured datasets, k-d trees demonstrated superior scalability into higher-dimensional spaces, with measured performance gains of approximately 7% on dense, non-unform 2d-datasets.
                            </p>
                            <p style = "margin-left: 50px">
                                For my implementation of these data-structures, I found that the efficiency of quadtrees and k-d trees were dependent on operation and rebalancing steps.
                                However, for larger dimensional data k-d trees are easily extendable, whereas its harder/not efficient to extend higher dimensional data into quadtrees.
                            </p>
    `,
    physics_msg: `
    <p style = "margin-left: 50px; margin-bottom: 10px;">
                                Building on the <a href = "https://sciencenotes.org/double-slit-experiment/">classical double slit experiment</a>, this project explored the role of polarization in wave interference and its impact on observable diffraction patterns.
                                Motivated by <a href = "https://faculty.csbsju.edu/frioux/two-slit/PolarDoubleSlit.pdf">prior literature</a> on polarized interference, the goal was to experimentally reproduce and quantify how varying degrees of polarization affect fringe visibility and intensity distribution.
                            </p>

                            <p style = "margin-left: 50px">
                                The experimental setup used a 650 nm diode laser, linear and variable polarizers, and a photodiode connected to an Arduino-based data acquisition system. 
                                By varying polarization states, I observed that introducing polarization aligned with slit infromation caused the interference pattern to collapse into a single-slit-like distribution, consistent with theoretical predictions.
                                In addition, I experimentally verified Malus's Law by measuring transmitted intensity as a function of polarizer angle. This project emphasized experimental reproductibility, quantitative measurement, and comparison against analytical models.
                            </p>
    `,
    math_msg: `
        <p style = "margin-left: 50px;">                                
                                This exploration investigated Fourier series and transforms as mathematical tools for decomposing complex signals into constituent sinusoidal components.
                                Beginning with a proof of orthogonality for trignometric and complex exponential function sets, I derived the analysis and synthesis equatoins that enable transformation between time and frequency domains.
                                The theoretical framework was then appleid to practical examples: a rectangular pulse function and a custom periodic continuous function.
                                For each, I computed coefficients analytically, constructed approximations using partial sums, and visualized convergence behavior including Gibb's phenomenon at discontinuities.
                                The project emphaiszed the power of complex exponentials in simplifying signal anlsysi and demonstrated how frequency-domain representations reveal information invisibel in time-domain plots - directly applicable to audio processing, communications, and image compression. 
                            </p>
    `,
    chem_msg: `<p style = "margin-left: 50px; margin-bottom: 10px;">                                
                                This investigation explored how varying ferroin catalyst concentrations (0.001M to 0.003M) affect the oscillation rate of the <a href = "https://en.wikipedia.org/wiki/Belousov%E2%80%93Zhabotinsky_reaction">BZ-reaction</a>, a classic example of far-from-equilibrium chemical kinetics.
                            </p>
                            <p style = "margin-left: 50px;">  
                                Using a colorimeter to track absorbance changes over time, I quantified oscillation periods and amplitudes across multiple trials.
                                The experimental setup involved preparing reagent mixtures and loggin real-time ddata to analyze reaction dynamics.
                                Despite signifcant experiemntal challanges - including carbonation interference, measurement uncertainty (~28%), and numerous outliers - the valid data suggested a correlation between catalyst concentration and reaction rate, with a Pearson coefficient of -0.76.
                                The project demonstratd the complex relatoinship between catalytic activity and oscillatory behavior, while highlighting the importance of rigorous experimental controls in chemical kinetics studies.
                            </p>`
};
const ib_messages_links = {
    cs_msg:` Paper: <a href="assets/CompSci-EE.pdf" target = "_blank">Link</a> <br>
                        Source Code: <a href = "https://github.com/jerry-zh0u/Analysis-of-K-d-Trees-and-Quadtrees" target = "_blank">Link</a>`,
    physics_msg:` Paper: <a href="assets/Physics-IA.pdf" target = "_blank">Link</a> <br>`,
    math_msg:` Paper: <a href="assets/Math-IA.pdf" target = "_blank">Link</a> <br>`,
    chem_msg:` Paper: <a href="assets/Chem-IA.pdf" target = "_blank">Link</a> <br>`
}

// const display = document.getElementById("ib-message-display");
// const buttons = document.querySelectorAll(".custom-grid-btn");

function setupFEBImageSlide(){
    const febImageList = [
        {src: "images/segment-real.jpg", description: "Printed Segment Board"},
        {src: "images/segment-board-3d-view.png", description: "Segment Board 3d View"},
        {src: "images/segment-board-top-view.png", description: "Segment Board 1st Layer (Power Traces + Signal Traces)"},
        {src: "images/segment-board-layer-2.png", description: "Segment Board 2nd Layer (Minimal Power Traces + Signal Traces)"},
        {src: "images/segment-board-layer-3.png", description: "Segment Board 3rd Layer (Ground Layer)"},
        {src: "images/segment-board-bottom-layer.png", description: "Segment Board 4th Layer (Signal Traces)"}
    ];
    // const febSlide = document.getElementById("slideshow");
    const febSlide = document.querySelector(".feb-slideshow");
    if(!febSlide){
        return;
    }

    const febImg = febSlide.querySelector(".img-slideshow");
    const febText = febSlide.querySelector(".description-slideshow");

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
    const esbSlide = document.querySelector(".esb-slideshow");
    if(!esbSlide){
        return;
    }

    const esbImg = esbSlide.querySelector(".img-slideshow");
    const esbText = esbSlide.querySelector(".description-slideshow");

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
    const hsSlide = document.querySelector(".hs-slideshow");
    if(!hsSlide){
        return;
    }

    const hsImg = hsSlide.querySelector(".img-slideshow");
    const hsText = hsSlide.querySelector(".description-slideshow");

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

        if(pos > window.innerWidth - cowWidth - deadband){
            pos = window.innerWidth - cowWidth - deadband - 1
        }else{
            pos = deadband + 1
        }

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

// display.textContent = ib_messages_content["cs_msg"];

// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         buttons.forEach(btn => btn.classList.remove("active"));

//         button.classList.add("active");

//         const key = button.dataset.message;
//         display.textContent = ib_messages_content[key];
//     });
// });


document.addEventListener("DOMContentLoaded", fetchLastUpdated);
document.addEventListener("DOMContentLoaded", cowAnimate)
document.addEventListener("DOMContentLoaded", setupFEBImageSlide)
document.addEventListener("DOMContentLoaded", setupESBImageSlide)
document.addEventListener("DOMContentLoaded", setupHSImageSlide)

document.addEventListener("DOMContentLoaded", () => {
    const displayTitle = document.getElementById("ib-message-title");
    const displayContent = document.getElementById("ib-message-display");
    const displayLinks = document.getElementById("ib-message-links");
    const buttons = document.querySelectorAll(".custom-grid-btn");

    console.log(displayContent);

    displayTitle.textContent = ib_messages_title["cs_msg"];
    displayContent.innerHTML = ib_messages_content["cs_msg"];
    displayLinks.innerHTML = ib_messages_links["cs_msg"];

    buttons.forEach(btn => {
        if (btn.dataset.message === "cs_msg") {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const key = button.dataset.message;
            displayTitle.textContent = ib_messages_title[key];
            displayContent.innerHTML = ib_messages_content[key];
            displayLinks.innerHTML = ib_messages_links[key];
        });
    });
});

document.getElementById("year").textContent = new Date().getFullYear();