"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// app-bound services environment variables
function get_service_label() {
    if (process.env.VCAP_SERVICES) {
        var svc_info = JSON.parse(process.env.VCAP_SERVICES);
        for (var label in svc_info) {
            var svcs = svc_info[label];
            for (var index in svcs) {
                return svcs[index].label;
            }
        }
    }
}
exports.get_service_label = get_service_label;
function get_service_name() {
    if (process.env.VCAP_SERVICES) {
        var svc_info = JSON.parse(process.env.VCAP_SERVICES);
        for (var label in svc_info) {
            var svcs = svc_info[label];
            for (var index in svcs) {
                return svcs[index].name;
            }
        }
    }
}
exports.get_service_name = get_service_name;
function get_service_plan() {
    if (process.env.VCAP_SERVICES) {
        var svc_info = JSON.parse(process.env.VCAP_SERVICES);
        for (var label in svc_info) {
            var svcs = svc_info[label];
            for (var index in svcs) {
                return svcs[index].plan;
            }
        }
    }
}
exports.get_service_plan = get_service_plan;
