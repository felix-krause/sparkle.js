import './main.less';
import SparkleDiv from './sparkle-div.js';

HTMLElement.prototype.sparkle = function (properties) {
    properties = properties || {};
    var thisStyle = this.currentStyle || window.getComputedStyle(this);
    if (thisStyle.position !== "relative" && thisStyle.position !== "absolute" && thisStyle.position !== "fixed") {
        this.style.position = "relative";
    }
    let sparkleDiv = new SparkleDiv(properties);
    sparkleDiv.fillParentElement();
    this.insertAdjacentElement(properties.position || "beforeend", sparkleDiv);
    sparkleDiv.animate();
}
NodeList.prototype.sparkle = function (properties) {
    this.forEach(el => {
        el.sparkle(properties);
        }
    );
}
HTMLElement.prototype.stopSparkling = function () {
    this.querySelectorAll("sparkle-div").forEach(el => el.remove);
}
NodeList.prototype.stopSparkling = function () {
    this.forEach(el => el.stopSparkling);
}