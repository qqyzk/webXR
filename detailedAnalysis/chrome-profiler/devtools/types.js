"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResourcePriority;
(function (ResourcePriority) {
    ResourcePriority[ResourcePriority["VeryLow"] = 0] = "VeryLow";
    ResourcePriority[ResourcePriority["Low"] = 1] = "Low";
    ResourcePriority[ResourcePriority["Medium"] = 2] = "Medium";
    ResourcePriority[ResourcePriority["High"] = 3] = "High";
    ResourcePriority[ResourcePriority["VeryHigh"] = 4] = "VeryHigh";
})(ResourcePriority = exports.ResourcePriority || (exports.ResourcePriority = {}));
var RecordType;
(function (RecordType) {
    RecordType["Task"] = "RunTask";
    RecordType["Program"] = "Program";
    RecordType["EventDispatch"] = "EventDispatch";
    RecordType["GPUTask"] = "GPUTask";
    RecordType["Animation"] = "Animation";
    RecordType["RequestMainThreadFrame"] = "RequestMainThreadFrame";
    RecordType["BeginFrame"] = "BeginFrame";
    RecordType["NeedsBeginFrameChanged"] = "NeedsBeginFrameChanged";
    RecordType["BeginMainThreadFrame"] = "BeginMainThreadFrame";
    RecordType["ActivateLayerTree"] = "ActivateLayerTree";
    RecordType["DrawFrame"] = "DrawFrame";
    RecordType["HitTest"] = "HitTest";
    RecordType["ScheduleStyleRecalculation"] = "ScheduleStyleRecalculation";
    RecordType["RecalculateStyles"] = "RecalculateStyles";
    RecordType["UpdateLayoutTree"] = "UpdateLayoutTree";
    RecordType["InvalidateLayout"] = "InvalidateLayout";
    RecordType["Layout"] = "Layout";
    RecordType["UpdateLayer"] = "UpdateLayer";
    RecordType["UpdateLayerTree"] = "UpdateLayerTree";
    RecordType["PaintSetup"] = "PaintSetup";
    RecordType["Paint"] = "Paint";
    RecordType["PaintImage"] = "PaintImage";
    RecordType["Rasterize"] = "Rasterize";
    RecordType["RasterTask"] = "RasterTask";
    RecordType["ScrollLayer"] = "ScrollLayer";
    RecordType["CompositeLayers"] = "CompositeLayers";
    RecordType["ScheduleStyleInvalidationTracking"] = "ScheduleStyleInvalidationTracking";
    RecordType["StyleRecalcInvalidationTracking"] = "StyleRecalcInvalidationTracking";
    RecordType["StyleInvalidatorInvalidationTracking"] = "StyleInvalidatorInvalidationTracking";
    RecordType["LayoutInvalidationTracking"] = "LayoutInvalidationTracking";
    RecordType["ParseHTML"] = "ParseHTML";
    RecordType["ParseAuthorStyleSheet"] = "ParseAuthorStyleSheet";
    RecordType["TimerInstall"] = "TimerInstall";
    RecordType["TimerRemove"] = "TimerRemove";
    RecordType["TimerFire"] = "TimerFire";
    RecordType["XHRReadyStateChange"] = "XHRReadyStateChange";
    RecordType["XHRLoad"] = "XHRLoad";
    RecordType["CompileScript"] = "v8.compile";
    RecordType["EvaluateScript"] = "EvaluateScript";
    RecordType["CompileModule"] = "v8.compileModule";
    RecordType["EvaluateModule"] = "v8.evaluateModule";
    RecordType["WasmStreamFromResponseCallback"] = "v8.wasm.streamFromResponseCallback";
    RecordType["WasmCompiledModule"] = "v8.wasm.compiledModule";
    RecordType["WasmCachedModule"] = "v8.wasm.cachedModule";
    RecordType["WasmModuleCacheHit"] = "v8.wasm.moduleCacheHit";
    RecordType["WasmModuleCacheInvalid"] = "v8.wasm.moduleCacheInvalid";
    RecordType["FrameStartedLoading"] = "FrameStartedLoading";
    RecordType["CommitLoad"] = "CommitLoad";
    RecordType["MarkLoad"] = "MarkLoad";
    RecordType["MarkDOMContent"] = "MarkDOMContent";
    RecordType["MarkFirstPaint"] = "firstPaint";
    RecordType["MarkFCP"] = "firstContentfulPaint";
    RecordType["MarkFMP"] = "firstMeaningfulPaint";
    RecordType["TimeStamp"] = "TimeStamp";
    RecordType["ConsoleTime"] = "ConsoleTime";
    RecordType["UserTiming"] = "UserTiming";
    RecordType["ResourceSendRequest"] = "ResourceSendRequest";
    RecordType["ResourceReceiveResponse"] = "ResourceReceiveResponse";
    RecordType["ResourceReceivedData"] = "ResourceReceivedData";
    RecordType["ResourceFinish"] = "ResourceFinish";
    RecordType["RunMicrotasks"] = "RunMicrotasks";
    RecordType["FunctionCall"] = "FunctionCall";
    RecordType["GCEvent"] = "GCEvent";
    RecordType["MajorGC"] = "MajorGC";
    RecordType["MinorGC"] = "MinorGC";
    RecordType["JSFrame"] = "JSFrame";
    RecordType["JSSample"] = "JSSample";
    // V8Sample events are coming from tracing and contain raw stacks with function addresses.
    // After being processed with help of JitCodeAdded and JitCodeMoved events they
    // get translated into function infos and stored as stacks in JSSample events.
    RecordType["V8Sample"] = "V8Sample";
    RecordType["JitCodeAdded"] = "JitCodeAdded";
    RecordType["JitCodeMoved"] = "JitCodeMoved";
    RecordType["ParseScriptOnBackground"] = "v8.parseOnBackground";
    RecordType["V8Execute"] = "V8.Execute";
    RecordType["UpdateCounters"] = "UpdateCounters";
    RecordType["RequestAnimationFrame"] = "RequestAnimationFrame";
    RecordType["CancelAnimationFrame"] = "CancelAnimationFrame";
    RecordType["FireAnimationFrame"] = "FireAnimationFrame";
    RecordType["RequestIdleCallback"] = "RequestIdleCallback";
    RecordType["CancelIdleCallback"] = "CancelIdleCallback";
    RecordType["FireIdleCallback"] = "FireIdleCallback";
    RecordType["WebSocketCreate"] = "WebSocketCreate";
    RecordType["WebSocketSendHandshakeRequest"] = "WebSocketSendHandshakeRequest";
    RecordType["WebSocketReceiveHandshakeResponse"] = "WebSocketReceiveHandshakeResponse";
    RecordType["WebSocketDestroy"] = "WebSocketDestroy";
    RecordType["EmbedderCallback"] = "EmbedderCallback";
    RecordType["SetLayerTreeId"] = "SetLayerTreeId";
    RecordType["TracingStartedInPage"] = "TracingStartedInPage";
    RecordType["TracingSessionIdForWorker"] = "TracingSessionIdForWorker";
    RecordType["DecodeImage"] = "Decode Image";
    RecordType["ResizeImage"] = "Resize Image";
    RecordType["DrawLazyPixelRef"] = "Draw LazyPixelRef";
    RecordType["DecodeLazyPixelRef"] = "Decode LazyPixelRef";
    RecordType["LazyPixelRef"] = "LazyPixelRef";
    RecordType["LayerTreeHostImplSnapshot"] = "cc::LayerTreeHostImpl";
    RecordType["PictureSnapshot"] = "cc::Picture";
    RecordType["DisplayItemListSnapshot"] = "cc::DisplayItemList";
    RecordType["LatencyInfo"] = "LatencyInfo";
    RecordType["LatencyInfoFlow"] = "LatencyInfo.Flow";
    RecordType["InputLatencyMouseMove"] = "InputLatency::MouseMove";
    RecordType["InputLatencyMouseWheel"] = "InputLatency::MouseWheel";
    RecordType["ImplSideFling"] = "InputHandlerProxy::HandleGestureFling::started";
    RecordType["GCCollectGarbage"] = "BlinkGC.AtomicPhase";
    RecordType["CryptoDoEncrypt"] = "DoEncrypt";
    RecordType["CryptoDoEncryptReply"] = "DoEncryptReply";
    RecordType["CryptoDoDecrypt"] = "DoDecrypt";
    RecordType["CryptoDoDecryptReply"] = "DoDecryptReply";
    RecordType["CryptoDoDigest"] = "DoDigest";
    RecordType["CryptoDoDigestReply"] = "DoDigestReply";
    RecordType["CryptoDoSign"] = "DoSign";
    RecordType["CryptoDoSignReply"] = "DoSignReply";
    RecordType["CryptoDoVerify"] = "DoVerify";
    RecordType["CryptoDoVerifyReply"] = "DoVerifyReply";
    // CpuProfile is a virtual event created on frontend to support
    // serialization of CPU Profiles within tracing timeline data.
    RecordType["CpuProfile"] = "CpuProfile";
    RecordType["Profile"] = "Profile";
    RecordType["AsyncTask"] = "AsyncTask";
})(RecordType = exports.RecordType || (exports.RecordType = {}));
var Category;
(function (Category) {
    Category["Console"] = "blink.console";
    Category["UserTiming"] = "blink.user_timing";
    Category["LatencyInfo"] = "latencyInfo";
})(Category = exports.Category || (exports.Category = {}));
var WarningType;
(function (WarningType) {
    WarningType["LongTask"] = "LongTask";
    WarningType["ForcedStyle"] = "ForcedStyle";
    WarningType["ForcedLayout"] = "ForcedLayout";
    WarningType["IdleDeadlineExceeded"] = "IdleDeadlineExceeded";
    WarningType["LongHandler"] = "LongHandler";
    WarningType["LongRecurringHandler"] = "LongRecurringHandler";
    WarningType["V8Deopt"] = "V8Deopt";
})(WarningType = exports.WarningType || (exports.WarningType = {}));
var DevToolsMetadataEvent;
(function (DevToolsMetadataEvent) {
    DevToolsMetadataEvent["TracingStartedInBrowser"] = "TracingStartedInBrowser";
    DevToolsMetadataEvent["TracingStartedInPage"] = "TracingStartedInPage";
    DevToolsMetadataEvent["TracingSessionIdForWorker"] = "TracingSessionIdForWorker";
    DevToolsMetadataEvent["FrameCommittedInBrowser"] = "FrameCommittedInBrowser";
    DevToolsMetadataEvent["ProcessReadyInBrowser"] = "ProcessReadyInBrowser";
    DevToolsMetadataEvent["FrameDeletedInBrowser"] = "FrameDeletedInBrowser";
})(DevToolsMetadataEvent = exports.DevToolsMetadataEvent || (exports.DevToolsMetadataEvent = {}));
var Thresholds;
(function (Thresholds) {
    Thresholds[Thresholds["LongTask"] = 200] = "LongTask";
    Thresholds[Thresholds["Handler"] = 150] = "Handler";
    Thresholds[Thresholds["RecurringHandler"] = 50] = "RecurringHandler";
    Thresholds[Thresholds["ForcedLayout"] = 30] = "ForcedLayout";
    Thresholds[Thresholds["IdleCallbackAddon"] = 5] = "IdleCallbackAddon";
})(Thresholds = exports.Thresholds || (exports.Thresholds = {}));
var TimelineSelectionType;
(function (TimelineSelectionType) {
    TimelineSelectionType[TimelineSelectionType["Frame"] = 0] = "Frame";
    TimelineSelectionType[TimelineSelectionType["NetworkRequest"] = 1] = "NetworkRequest";
    TimelineSelectionType[TimelineSelectionType["TraceEvent"] = 2] = "TraceEvent";
    TimelineSelectionType[TimelineSelectionType["Range"] = 3] = "Range";
})(TimelineSelectionType = exports.TimelineSelectionType || (exports.TimelineSelectionType = {}));
;
var NetworkCategory;
(function (NetworkCategory) {
    NetworkCategory[NetworkCategory["HTML"] = 0] = "HTML";
    NetworkCategory[NetworkCategory["Script"] = 1] = "Script";
    NetworkCategory[NetworkCategory["Style"] = 2] = "Style";
    NetworkCategory[NetworkCategory["Media"] = 3] = "Media";
    NetworkCategory[NetworkCategory["Other"] = 4] = "Other";
})(NetworkCategory = exports.NetworkCategory || (exports.NetworkCategory = {}));
;
//# sourceMappingURL=types.js.map