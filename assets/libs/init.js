$(document).ready(() => {
    window.getROI().then((result) => {
        let NUM_DECIMALS = 4; // 4 decimals for stats
        $(".1-month-roi").text(`${result.betokenStats.ROI.oneMonth.toFormat(NUM_DECIMALS)}`);
        $(".inception-roi").text(`${result.betokenStats.ROI.sinceInception.toFormat(NUM_DECIMALS)}`);
        $(".sortino-ratio").text(`${result.betokenStats.SortinoRatio.toFormat(NUM_DECIMALS)}`);
        $(".std").text(`${result.betokenStats.Std.toFormat(NUM_DECIMALS)}`);
    });
});
