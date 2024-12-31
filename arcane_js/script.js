// Data: Nodes and Edges
const nodes = [
    { id: "Vi", role: "Hero", faction: "Zaun", status: "Alive" },
    { id: "Jinx", role: "Villain", faction: "Zaun", status: "Alive" },
    { id: "Caitlyn", role: "Hero", faction: "Piltover", status: "Alive" },
    { id: "Jayce", role: "Hero", faction: "Piltover", status: "Alive" },
    { id: "Viktor", role: "Villain", faction: "Zaun", status: "Alive" },
    { id: "Silco", role: "Villain", faction: "Zaun", status: "Dead" },
    { id: "Heimerdinger", role: "Mentor", faction: "Piltover", status: "Alive" },
    { id: "Mel", role: "Politician", faction: "Piltover", status: "Alive" },
    { id: "Ekko", role: "Rebel", faction: "Zaun", status: "Alive" },
    { id: "Sevika", role: "Lieutenant", faction: "Zaun", status: "Alive" },
    { id: "Vander", role: "Rebel", faction: "Zaun", status: "Dead" },
    { id: "Marcus", role: "Hero", faction: "Piltover", status: "Alive" },
    { id: "Caitlyn's Mother", role: "Politician", faction: "Piltover", status: "Dead" }
];

const links = [
    { source: "Vi", target: "Jinx", relationship: "Sisters" },
    { source: "Vi", target: "Caitlyn", relationship: "Allies" },
    { source: "Vi", target: "Jayce", relationship: "Teammates" },
    { source: "Caitlyn", target: "Jinx", relationship: "Rivals" },
    { source: "Jayce", target: "Viktor", relationship: "Collaborators" },
    { source: "Viktor", target: "Silco", relationship: "Allies" },
    { source: "Heimerdinger", target: "Jayce", relationship: "Mentors" },
    { source: "Mel", target: "Jayce", relationship: "Allies" },
    { source: "Ekko", target: "Jinx", relationship: "Rivals" },
    { source: "Sevika", target: "Vi", relationship: "Enemies" },
    { source: "Silco", target: "Sevika", relationship: "Allies" },
    { source: "Vander", target: "Ekko", relationship: "Mentor" },
    { source: "Marcus", target: "Caitlyn", relationship: "Father/Daughter" },
    { source: "Caitlyn's Mother", target: "Caitlyn", relationship: "Mother/Daughter" },
    { source: "Caitlyn", target: "Marcus", relationship: "Allies" },
    { source: "Viktor", target: "Caitlyn", relationship: "Unlikely Allies" },
    { source: "Vi", target: "Caitlyn", relationship: "Romantic Interests" },
    { source: "Ekko", target: "Jinx", relationship: "Romantic Interests" }
];

// Define color palette for node roles
const roleColors = {
    "Hero": "rgba(116, 185, 255, 0.95)", // Light Blue
    "Villain": "rgba(231, 112, 85, 0.95)", // Light Red
    "Mentor": "rgba(0, 206, 201, 0.95)", // Light Cyan
    "Rebel": "rgba(108, 92, 231, 0.95)", // Light Purple
    "Politician": "rgba(99, 110, 114, 0.95)", // Light Gray
    "Lieutenant": "rgba(223, 230, 233, 0.95)" // Light White
};

// Set up the SVG container
const svg = d3.select("svg");
const width = window.innerWidth;
const height = window.innerHeight;
svg.attr("width", width).attr("height", height);

// Debugging logs
console.log(nodes);
console.log(links);

// Create the simulation
const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(200))
    .force("charge", d3.forceManyBody().strength(-1000))
    .force("center", d3.forceCenter(width / 2, height / 2));

// Create links (edges)
const link = svg.append("g")
    .selectAll(".link")
    .data(links)
    .enter().append("line")
    .attr("class", "link")
    .attr("stroke-width", 2);

// Create nodes
const node = svg.append("g")
    .selectAll(".node")
    .data(nodes)
    .enter().append("circle")
    .attr("class", "node")
    .attr("r", 15)
    .attr("fill", d => roleColors[d.role])
    .call(d3.drag()
        .on("start", dragstart)
        .on("drag", dragged)
        .on("end", dragend));

// Add labels to nodes
const labels = svg.append("g")
    .selectAll("text")
    .data(nodes)
    .enter().append("text")
    .attr("x", d => d.x)
    .attr("y", d => d.y)
    .attr("dy", -20)
    .attr("text-anchor", "middle")
    .attr("fill", "#fff")
    .text(d => d.id);

// Update the simulation
simulation
    .nodes(nodes)
    .on("tick", ticked);

simulation.force("link")
    .links(links);

// Zoom and Pan functionality
const zoom = d3.zoom().scaleExtent([0.5, 3]).on("zoom", zoomed);
svg.call(zoom);

function zoomed(event) {
    svg.attr("transform", event.transform);
}

// Update positions of links, nodes, and labels
function ticked() {
    console.log('Ticking...');
    link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);

    labels
        .attr("x", d => d.x)
        .attr("y", d => d.y); // Ensure text moves with the nodes
}

// Drag functions
function dragstart(event) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
}

function dragged(event) {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
}

function dragend(event) {
    if (!event.active) simulation.alphaTarget(0);
    event.subject.fx = null;
    event.subject.fy = null;
}

// Tooltip for showing node information
const tooltip = d3.select("#tooltip");

node.on("mouseover", function(event, d) {
    d3.select(this).transition().duration(200).attr("r", 20).style("fill", "#ff0");
    tooltip.transition().duration(200).style("opacity", 1);
    tooltip.html(`Name: ${d.id}<br>Role: ${d.role}<br>Status: ${d.status}`)
        .style("left", (event.pageX + 5) + "px")
        .style("top", (event.pageY - 28) + "px");
})
.on("mouseout", function(event, d) {
    d3.select(this).transition().duration(200).attr("r", 15).style("fill", roleColors[d.role]);
    tooltip.transition().duration(200).style("opacity", 0);
});

