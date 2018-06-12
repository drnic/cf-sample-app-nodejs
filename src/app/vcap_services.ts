// app-bound services environment variables
export function get_service_label(): string {
  if (process.env.VCAP_SERVICES) {
    var svc_info = JSON.parse(process.env.VCAP_SERVICES)
    for (var label in svc_info) {
      var svcs = svc_info[label]
      for (var index in svcs) {
        return svcs[index].label
      }
    }
  }
}

export function get_service_name(): string {
  if (process.env.VCAP_SERVICES) {
    var svc_info = JSON.parse(process.env.VCAP_SERVICES)
    for (var label in svc_info) {
      var svcs = svc_info[label]
      for (var index in svcs) {
        return svcs[index].name
      }
    }
  }
}

export function get_service_plan(): string {
  if (process.env.VCAP_SERVICES) {
    var svc_info = JSON.parse(process.env.VCAP_SERVICES)
    for (var label in svc_info) {
      var svcs = svc_info[label]
      for (var index in svcs) {
        return svcs[index].plan
      }
    }
  }
}
