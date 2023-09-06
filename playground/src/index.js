import cytoscape from "cytoscape";
import fcose from "cytoscape-fcose";

cytoscape.use(fcose);

import experiences from "./experience.json";

console.log(experiences);
const experienceCategories = Object.keys(experiences);

const nodes = [];
const edges = [];

for (let key of experienceCategories) {
  const subExperiences = Object.values(experiences[key]);
  for (let exp of subExperiences) {
    nodes.push({ data: { label: exp.id, id: exp.id, type: key } });
    for (let link of exp.Links) {
      edges.push({ data: { source: exp.id, target: link } });
      if (!nodes.map((x) => x.data.id).includes(link)) {
        nodes.push({ data: { label: link, id: link, type: "other" } });
      }
    }
  }
}

var cy = (window.cy = cytoscape({
  container: document.getElementById("cy"),
  boxSelectionEnabled: true,
  autounselectify: true,
  layout: {
    name: "fcose",
  },

  style: [
    {
      selector: "node",
      style: {
        content: "data(label)",
        "font-size": "8px",
        "text-valign": "top",
        "text-halign": "center",
        height: 25,
        width: 25,
        "background-color": (el) => {
          switch (el._private.data.type) {
            case "Jobs":
              return "#003f5c";
              break;
            case "Projects":
              return "#2f4b7c";
              break;
            default:
              return "#665191";
          }
        },
      },
    },

    {
      selector: "edge",
      style: {
        "curve-style": "bezier",
        width: 2,
        "line-color": "grey",
      },
    },
  ],

  elements: {
    nodes: nodes,
    edges: edges,
  },
}));

cy.on("click", "node", function (evt) {
  var node = evt.target;
  debugger;
  console.log("tapped " + node.id());
});
