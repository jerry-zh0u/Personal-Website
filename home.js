let pos = 0;
let direction = 1;
const speed = 0.2;

function cowAnimate(){
  const cow = document.getElementById("cow");

  pos += speed * direction

  if(pos > window.innerWidth - 128 || pos < 0){
    direction *= -1
  }
  
  cow.style.left = pos + 'px';

  requestAnimationFrame(cowAnimate);
}

function fetchLastUpdated() {
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
        hour12: true
      };
      const formatted = date.toLocaleString(undefined, options);

      document.getElementById("last-updated").textContent =
        "Last updated: " + formatted;
    })
    .catch(err => console.error("Error fetching GitHub commits:", err));
}

document.addEventListener("DOMContentLoaded", fetchLastUpdated);
document.addEventListener("DOMContentLoaded", cowAnimate)