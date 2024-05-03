import React, { useEffect } from 'react';
import * as d3 from 'd3';

const IPFSPieChart = () => {
  useEffect(() => {
    // Function to fetch JSON data from IPFS Pinata
    const fetchData = async () => {
      
      const response = await fetch('https://gateway.pinata.cloud/ipfs/<your_hash>');
      const data = await response.json();
      return data;
    }

    // Function to draw pie chart
    const drawChart = async () => {
      const data = await fetchData();

      const width = 400;
      const height = 400;
      const radius = Math.min(width, height) / 2;

      const color = d3.scaleOrdinal(d3.schemeCategory10);

      const svg = d3.select("#chart")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

      const arc = d3.arc()
        .innerRadius(0)
        .outerRadius(radius);

      const pie = d3.pie()
        .value(d => d.value);

      const arcs = svg.selectAll("arc")
        .data(pie(data))
        .enter()
        .append("g")
        .attr("class", "arc");

      arcs.append("path")
        .attr("d", arc)
        .attr("fill", d => color(d.data.label));

      arcs.append("text")
        .attr("transform", d => "translate(" + arc.centroid(d) + ")")
        .attr("text-anchor", "middle")
        .text(d => d.data.label);
    }

    drawChart();
  }, []);

  return (
    <div>
      <h1>IPFS Data Pie Chart</h1>
      <div id="chart"></div>
    </div>
  );
}

export default IPFSPieChart;
