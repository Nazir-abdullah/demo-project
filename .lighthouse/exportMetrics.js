const fs = require("fs");
const data = [];

try {
    const file = fs.readFileSync("lhci/manifest.json", { encoding: "utf8" });
    const metrics = JSON.parse(file);

    metrics.map(metric => {
        const { summary, url } = metric;

        if (!metric.isRepresentativeRun) {
            return;
        }

        Object.entries(summary).forEach(([name, value]) => {
            fs.appendFileSync("metrics.txt", `${name} ${value * 100} \n`);
        });
    });
} catch (error) {
    console.error("Cannot export metrics:", error.message);
}
