import SparkleStarDiv from './sparkle-star-div.js';

export default class SparkleDiv extends HTMLElement {
    constructor(p) {
        super();
        p = p || {};
        this.count = p.count || 3;
        this.size = p.size || {
            width: "15px",
            height: "15px"
        };
        this.minAge = p.minAge || 2000;
        this.maxAge = p.maxAge || 5000;
        var starsourceString = `<svg width="100%" height="100%" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M1.125,4.95l4.462,0l1.913,-3.825l0.637,3.825l5.738,0l-4.463,3.188l0.638,5.737l-3.187,-3.825l-4.463,3.825l1.913,-5.737l-3.188,-3.188Z" style="fill:#fff;"></path></svg>`;
        if (p.starsource) {
            if (typeof (p.starsource) === "string") {
                starsourceString = p.starsource;
            } else {
                this.starsource = p.starsource;
            }
        }

        if (!this.starsource) {
            let star = document.createElement("div");
            star.style.display = "block";
            star.innerHTML = starsourceString;
            star.width = this.size.width;
            star.height = this.size.height;
            this.starsource = star;
            this.starsource.style.visibility = "hidden";
            this.starsource.style.width = this.size.width;
            this.starsource.style.height = this.size.height;
            this.insertAdjacentElement("beforeend", this.starsource);
        }
    }

    fillParentElement() {
        this.classList.add("cover");
    }

    animate() {
        for (let i = 0; i < this.count; i++) {
            let sparkleStar = new SparkleStarDiv(this);
            this.insertAdjacentElement("beforeend", sparkleStar);
        }
    }
}
customElements.define('sparkle-div', SparkleDiv);