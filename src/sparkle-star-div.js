export default class SparkleStarDiv extends HTMLElement {
    constructor(parentElement) {
        super();
        let source = parentElement.starsource.cloneNode(true);
        source.style.visibility = "visible";
        this.insertAdjacentElement("beforeend", source)
        let age = parentElement.minAge + ((parentElement.maxAge - parentElement.minAge) * Math.random());
        this.style.animationDuration = age + "ms";
        let top = -(parentElement.starsource.clientHeight / 2) + (Math.floor(Math.random() * (parentElement.clientHeight)));
        let left = -(parentElement.starsource.clientWidth / 2) + (Math.floor(Math.random() * (parentElement.clientWidth)));
        this.style.top = top + "px";
        this.style.left = left + "px";

        var star = this;
        window.setTimeout(() => {
            star.remove();
            parentElement.insertAdjacentElement("beforeend", new SparkleStarDiv(parentElement));
        }, age)
    }
}
customElements.define('sparkle-star-div', SparkleStarDiv);