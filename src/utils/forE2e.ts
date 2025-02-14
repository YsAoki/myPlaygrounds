const adjustZoomUntilNoScrollbar = async (page: Page) => {
  let zoomLevel = 1.0; // 初期倍率
  const step = 0.1; // 0.1ずつ縮小
  const minZoom = 0.5; // 最小倍率

  while (zoomLevel > minZoom) {
    await page.evaluate((zoom) => {
      document.body.style.zoom = zoom.toString(); // ズーム調整
    }, zoomLevel);

    // 横スクロールバーの可視性をチェック
    const hasHorizontalScrollbar = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });

    if (!hasHorizontalScrollbar) {
      console.log(`✅ 横スクロールバーが消えた！ズーム倍率: ${zoomLevel}`);
      return;
    }

    zoomLevel -= step; // ズーム倍率を下げる
    await page.waitForTimeout(200); // レイアウト反映のため少し待機
  }

  console.log("⚠️ 最小ズームレベルでも横スクロールバーが残ってる");
};

