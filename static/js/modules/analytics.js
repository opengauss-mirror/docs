let eventBuffer;
const MAX_BUFFER_SIZE = 10;

export const OpenEventKeys = { DOCS: "docs", SEARCH: "search_docs" };
export let oa;
let oaEnabled = false;
let importFailed = false;

const load = (async function () {
  try {
    const OA = await import(
      "https://unpkg.com/@opensig/open-analytics@0.0.9/dist/open-analytics.mjs"
    );
    oa = new OA.OpenAnalytics({
      appKey: "openGauss",
      request: (data) => {
        fetch("/api-dsapi/query/track/opengauss", {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify(data),
        }).catch(() => ({}));
      },
    });
    Object.assign(OpenEventKeys, OA.OpenEventKeys);
    oa.setHeader(OA.getClientInfo());
    oa.enableReporting(oaEnabled);
    eventBuffer?.forEach((item) => {
      oaReport(item.event, item.eventData, item.$service, item.options);
    });
  } catch {
    importFailed = true;
  } finally {
    eventBuffer = null;
  }
})();

export const enableOA = () => {
  if (importFailed) {
    return;
  }
  if (!oa) {
    oaEnabled = true;
    return;
  }
  oa.enableReporting(true);
};

export const disableOA = () => {
  if (importFailed) {
    return;
  }
  if (!oa) {
    oaEnabled = false;
    return;
  }
  oa.enableReporting(false);
};

export const reportPV = async () => {
  await load;
  if (importFailed) {
    return;
  }
  oaReport(OpenEventKeys.PV);
};

export const reportPerformance = async () => {
  await load;
  if (importFailed) {
    return;
  }
  oaReport(OpenEventKeys.LCP);
  oaReport(OpenEventKeys.INP);
  oaReport(OpenEventKeys.PageBasePerformance);
};

/**
 * @param {string} event 事件名
 * @param {Object | undefined} eventData 上报数据
 * @param {string | undefined} $service service字段取值
 * @param {Object} options options
 */
export const oaReport = async (
  event,
  eventData,
  $service = OpenEventKeys.DOCS,
  options
) => {
  if (importFailed) {
    return;
  }
  if (!oa) {
    if ((eventBuffer ??= []).length < MAX_BUFFER_SIZE) {
      eventBuffer.push({
        event,
        eventData,
        $service,
        options,
      });
    }
    return;
  }
  await oa.report(
    event,
    async (...opt) => ({
      $service,
      ...(typeof eventData === "function"
        ? await eventData(...opt)
        : eventData),
    }),
    options
  );
};
