"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
/**
 * @unrestricted
 */
class Counter {
    constructor() {
        this.times = [];
        this.values = [];
    }
    /**
     * @param {number} time
     * @param {number} value
     */
    appendSample(time, value) {
        if (this.values[this.values.length - 1] === value) {
            return;
        }
        this.times.push(time);
        this.values.push(value);
    }
    reset() {
        this.times = [];
        this.values = [];
    }
    /**
     * @param {number} value
     */
    setLimit(value) {
        this._limitValue = value;
    }
    /**
     * @return {!{min: number, max: number}}
     */
    _calculateBounds() {
        let maxValue;
        let minValue;
        for (let i = this._minimumIndex; i <= this._maximumIndex; i++) {
            const value = this.values[i];
            if (minValue === undefined || value < minValue) {
                minValue = value;
            }
            if (maxValue === undefined || value > maxValue) {
                maxValue = value;
            }
        }
        minValue = minValue || 0;
        maxValue = maxValue || 1;
        if (this._limitValue) {
            if (maxValue > this._limitValue * 0.5) {
                maxValue = Math.max(maxValue, this._limitValue);
            }
            minValue = Math.min(minValue, this._limitValue);
        }
        return {
            min: minValue,
            max: maxValue,
        };
    }
    /**
     * @param {!Timeline.CountersGraph.Calculator} calculator
     */
    _calculateVisibleIndexes(calculator) {
        const start = calculator.minimumBoundary();
        const end = calculator.maximumBoundary();
        // Maximum index of element whose time <= start.
        this._minimumIndex = utils_1.constrain(utils_1.upperBound(this.times, start) - 1, 0, this.times.length - 1);
        // Minimum index of element whose time >= end.
        this._maximumIndex = utils_1.constrain(utils_1.lowerBound(this.times, end), 0, this.times.length - 1);
        // Current window bounds.
        this._minTime = start;
        this._maxTime = end;
    }
    /**
     * @param {number} width
     */
    _calculateXValues(width) {
        if (!this.values.length) {
            return;
        }
        const xFactor = width / (this._maxTime - this._minTime);
        this.x = new Array(this.values.length);
        for (let i = this._minimumIndex + 1; i <= this._maximumIndex; i++) {
            this.x[i] = xFactor * (this.times[i] - this._minTime);
        }
    }
}
exports.default = Counter;
//# sourceMappingURL=counter.js.map