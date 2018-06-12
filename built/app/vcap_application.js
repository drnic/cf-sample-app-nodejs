"use strict";
// app-specific environment variables
Object.defineProperty(exports, "__esModule", { value: true });
function get_app_name() {
    if (process.env.VCAP_APPLICATION) {
        var app_info = JSON.parse(process.env.VCAP_APPLICATION);
        return app_info.name;
    }
}
exports.get_app_name = get_app_name;
function get_app_uris() {
    if (process.env.VCAP_APPLICATION) {
        var app_info = JSON.parse(process.env.VCAP_APPLICATION);
        return app_info.uris.join(', ');
    }
}
exports.get_app_uris = get_app_uris;
function get_app_space() {
    if (process.env.VCAP_APPLICATION) {
        var app_info = JSON.parse(process.env.VCAP_APPLICATION);
        return app_info.space_name;
    }
}
exports.get_app_space = get_app_space;
function get_app_index() {
    if (process.env.INSTANCE_INDEX) {
        var app_index = process.env.INSTANCE_INDEX;
        return app_index;
    }
}
exports.get_app_index = get_app_index;
function get_app_mem_limits() {
    if (process.env.VCAP_APPLICATION) {
        var app_info = JSON.parse(process.env.VCAP_APPLICATION);
        return app_info.limits.mem;
    }
}
exports.get_app_mem_limits = get_app_mem_limits;
function get_app_disk_limits() {
    if (process.env.VCAP_APPLICATION) {
        var app_info = JSON.parse(process.env.VCAP_APPLICATION);
        return app_info.limits.disk;
    }
}
exports.get_app_disk_limits = get_app_disk_limits;
