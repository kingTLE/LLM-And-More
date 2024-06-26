import { IconClock, IconCircleCheckFilled, IconLoader, IconProgress } from "@tabler/icons-vue";

export const digitalhumanStatusMap = {
  running: {
    text: "合成中",
    color: "info"
  },
  success: {
    text: "已完成",
    color: "success"
  },
  failed: {
    text: "失败",
    color: "error"
  },
  waiting: {
    text: "等待中",
    color: "warning"
  },
  cancel: {
    text: "已取消",
    color: "error"
  }
};

export const taskDetailConfig = [
  {
    statusText: "合成中",
    valueText: "个任务",
    key: "runningJobCount",
    color: "info",
    bgColor: "lightinfo",
    icon: IconProgress
  },
  {
    statusText: "等待中",
    valueText: "个任务",
    key: "waitingJobCount",
    color: "warning",
    bgColor: "lightwarning",
    icon: IconLoader
  },
  {
    statusText: "已完成",
    valueText: "个任务",
    key: "successJobCount",
    color: "success",
    bgColor: "lightsuccess",
    icon: IconCircleCheckFilled
  }
];
