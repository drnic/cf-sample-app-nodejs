// app-specific environment variables

export function get_app_name(): string {
  if (process.env.VCAP_APPLICATION) {
    var app_info = JSON.parse(process.env.VCAP_APPLICATION)
    return app_info.name
  }
}

export function get_app_uris(): string[] {
  if (process.env.VCAP_APPLICATION) {
    var app_info = JSON.parse(process.env.VCAP_APPLICATION)
    return app_info.uris.join(', ')
  }
}

export function get_app_space(): string {
  if (process.env.VCAP_APPLICATION) {
    var app_info = JSON.parse(process.env.VCAP_APPLICATION)
    return app_info.space_name
  }
}

export function get_app_index(): string {
  if (process.env.INSTANCE_INDEX) {
    var app_index = process.env.INSTANCE_INDEX
    return app_index
  }
}

export function get_app_mem_limits(): string {
  if (process.env.VCAP_APPLICATION) {
    var app_info = JSON.parse(process.env.VCAP_APPLICATION)
    return app_info.limits.mem
  }
}

export function get_app_disk_limits(): string {
  if (process.env.VCAP_APPLICATION) {
    var app_info = JSON.parse(process.env.VCAP_APPLICATION)
    return app_info.limits.disk
  }
}
