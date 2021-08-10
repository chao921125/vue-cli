<template>
    <div class="chartdiv" id="chartdiv" ref="chartdiv"></div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default {
    name: "A4ForceDirected",
    data() {
        return {
            chart: null,
        };
    },
    mounted() {
        let chart = am4core.create(this.$refs.chartdiv, am4plugins_forceDirected.ForceDirectedTree);
        let networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries());
        networkSeries.dataFields.linkWith = "linkWith";
        networkSeries.dataFields.name = "name";
        networkSeries.dataFields.id = "name";
        networkSeries.dataFields.value = "value";
        networkSeries.dataFields.children = "children";

        networkSeries.nodes.template.label.text = "{name}";
        networkSeries.fontSize = 8;
        networkSeries.linkWithStrength = 0;

        let nodeTemplate = networkSeries.nodes.template;
        nodeTemplate.tooltipText = "{name}";
        nodeTemplate.fillOpacity = 1;
        nodeTemplate.label.hideOversized = true;
        nodeTemplate.label.truncate = true;

        let linkTemplate = networkSeries.links.template;
        linkTemplate.strokeWidth = 1;
        let linkHoverState = linkTemplate.states.create("hover");
        linkHoverState.properties.strokeOpacity = 1;
        linkHoverState.properties.strokeWidth = 2;

        nodeTemplate.events.on("over", function (event) {
            let dataItem = event.target.dataItem;
            dataItem.childLinks.each(function (link) {
                link.isHover = true;
            });
        });

        nodeTemplate.events.on("out", function (event) {
            let dataItem = event.target.dataItem;
            dataItem.childLinks.each(function (link) {
                link.isHover = false;
            });
        });

        networkSeries.data = [
            {
                name: "Root",
                value: 20,
                linkWith: [],
                children: [
                    {
                        name: "A",
                        value: 10,
                        children: [
                            {
                                name: "1",
                                value: 1,
                            },
                            {
                                name: "2",
                                value: 1,
                            },
                            {
                                name: "3",
                                value: 1,
                            },
                        ],
                    },
                    {
                        name: "B",
                        value: 10,
                        children: [
                            {
                                name: "1",
                                value: 1,
                            },
                            {
                                name: "2",
                                value: 1,
                            },
                            {
                                name: "3",
                                value: 1,
                            },
                        ],
                    },
                    {
                        name: "C",
                        value: 10,
                        children: [
                            {
                                name: "1",
                                value: 1,
                            },
                            {
                                name: "2",
                                value: 1,
                            },
                            {
                                name: "3",
                                value: 1,
                            },
                        ],
                    },
                    {
                        name: "D",
                        value: 10,
                        children: [
                            {
                                name: "1",
                                value: 1,
                            },
                            {
                                name: "2",
                                value: 1,
                            },
                            {
                                name: "3",
                                value: 1,
                            },
                        ],
                    },
                    {
                        name: "E",
                        value: 10,
                        children: [
                            {
                                name: "1",
                                value: 1,
                            },
                            {
                                name: "2",
                                value: 1,
                            },
                            {
                                name: "3",
                                value: 1,
                            },
                        ],
                    },
                    {
                        name: "F",
                        value: 10,
                        children: [
                            {
                                name: "1",
                                value: 1,
                            },
                            {
                                name: "2",
                                value: 1,
                            },
                            {
                                name: "3",
                                value: 1,
                            },
                        ],
                    },
                    {
                        name: "G",
                        value: 10,
                        children: [
                            {
                                name: "1",
                                value: 1,
                            },
                            {
                                name: "2",
                                value: 1,
                            },
                            {
                                name: "3",
                                value: 1,
                            },
                        ],
                    },
                    {
                        name: "H",
                        value: 10,
                        children: [
                            {
                                name: "1",
                                value: 1,
                            },
                            {
                                name: "2",
                                value: 1,
                            },
                            {
                                name: "3",
                                value: 1,
                            },
                        ],
                    },
                    {
                        name: "I",
                        value: 10,
                        children: [
                            {
                                name: "1",
                                value: 1,
                            },
                            {
                                name: "2",
                                value: 1,
                            },
                            {
                                name: "3",
                                value: 1,
                            },
                        ],
                    },
                    {
                        name: "J",
                        value: 10,
                        children: [
                            {
                                name: "1",
                                value: 1,
                            },
                            {
                                name: "2",
                                value: 1,
                            },
                            {
                                name: "3",
                                value: 1,
                            },
                        ],
                    },
                    {
                        name: "K",
                        value: 10,
                        children: [
                            {
                                name: "1",
                                value: 1,
                            },
                            {
                                name: "2",
                                value: 1,
                            },
                            {
                                name: "3",
                                value: 1,
                            },
                        ],
                    },
                ],
            },
        ];

        this.chart = chart;
    },
    beforeDestroy() {
        if (this.chart) {
            this.chart.dispose();
        }
    },
};
</script>

<style scoped>
.chartdiv {
    width: 100%;
    height: 550px;
}
</style>
