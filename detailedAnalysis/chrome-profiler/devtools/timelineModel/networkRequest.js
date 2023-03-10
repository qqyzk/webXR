"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
class NetworkRequest {
    /**
     * @param {!SDK.TracingModel.Event} event
     */
    constructor(event) {
        this.startTime =
            event.name === types_1.RecordType.ResourceSendRequest ? event.startTime : 0;
        this.endTime = Infinity;
        this.encodedDataLength = 0;
        this.decodedBodyLength = 0;
        /** @type {!Array<!SDK.TracingModel.Event>} */
        this.children = [];
        /** @type {?Object} */
        this.timing;
        /** @type {string} */
        this.mimeType;
        /** @type {string} */
        this.url;
        /** @type {string} */
        this.requestMethod;
        this.addEvent(event);
    }
    /**
     * @param {!SDK.TracingModel.Event} event
     */
    addEvent(event) {
        this.children.push(event);
        const recordType = types_1.RecordType;
        this.startTime = Math.min(this.startTime, event.startTime);
        const eventData = event.args['data'];
        if (eventData['mimeType']) {
            this.mimeType = eventData.mimeType;
        }
        if ('priority' in eventData) {
            this.priority = eventData.priority;
        }
        if (event.name === recordType.ResourceFinish) {
            this.endTime = event.startTime;
        }
        if (eventData['finishTime']) {
            this.finishTime = eventData['finishTime'] * 1000;
        }
        if (!this.responseTime &&
            (event.name === recordType.ResourceReceiveResponse ||
                event.name === recordType.ResourceReceivedData)) {
            this.responseTime = event.startTime;
        }
        const encodedDataLength = eventData['encodedDataLength'] || 0;
        if (event.name === recordType.ResourceReceiveResponse) {
            if (eventData['fromCache']) {
                this.fromCache = true;
            }
            if (eventData['fromServiceWorker']) {
                this.fromServiceWorker = true;
            }
            this.encodedDataLength = encodedDataLength;
        }
        if (event.name === recordType.ResourceReceivedData) {
            this.encodedDataLength += encodedDataLength;
        }
        if (event.name === recordType.ResourceFinish && encodedDataLength) {
            this.encodedDataLength = encodedDataLength;
        }
        const decodedBodyLength = eventData['decodedBodyLength'];
        if (event.name === recordType.ResourceFinish && decodedBodyLength) {
            this.decodedBodyLength = decodedBodyLength;
        }
        if (!this.url) {
            this.url = eventData.url;
        }
        if (!this.requestMethod) {
            this.requestMethod = eventData['requestMethod'];
        }
        if (!this.timing) {
            this.timing = eventData['timing'];
        }
        if (eventData.fromServiceWorker) {
            this.fromServiceWorker = true;
        }
    }
    /**
     * @return {number}
     */
    beginTime() {
        return Math.min(this.startTime, (this.timing && this.timing.requestTime * 1000) || Infinity, (this.timing && this.timing.pushStart * 1000) || Infinity);
    }
}
exports.default = NetworkRequest;
//# sourceMappingURL=networkRequest.js.map