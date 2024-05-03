import React, { useEffect } from 'react';
import * as d3 from 'd3';

const PieChart = () => {
  useEffect(() => {
    // Sample input data
    const data = [
      { label: 'Apples', value: 30 },
      { label: 'Bananas', value: 20 },
      { label: 'Oranges', value: 15 },
      { label: 'Grapes', value: 10 },
      { label: 'Pears', value: 25 },
    ];

    // Set up SVG dimensions
    const width = 400;
    const height = 400;
    const radius = Math.min(width, height) / 2;

    // Create an SVG element
    const svg = d3.select('#piechart')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    // Define a color scale
    const color = d3.scaleOrdinal()
      .domain(data.map(d => d.label))
      .range(d3.schemeCategory10);

    // Create a pie chart layout
    const pie = d3.pie()
      .value(d => d.value);

    // Generate the pie chart data
    const pieData = pie(data);

    // Create arc generator
    const arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius);

    // Draw the pie chart
    svg.selectAll('path')
      .data(pieData)
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', d => color(d.data.label))
      .attr('stroke', 'white')
      .attr('stroke-width', 2);

    // Add labels
    svg.selectAll('text')
      .data(pieData)
      .enter()
      .append('text')
      .attr('transform', d => `translate(${arc.centroid(d)})`)
      .attr('dy', '0.35em')
      .attr('text-anchor', 'middle')
      .text(d => `${d.data.label} (${d.data.value})`); 
  }, []);

  return (
    <div id="piechart"></div>
  );
};

export default PieChart;
