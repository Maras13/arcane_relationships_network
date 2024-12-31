
# Arcane Relationship Visualization 🎬

This project creates an interactive network visualization of characters from the animated series *Arcane*, showcasing their relationships (alliances, rivalries, etc.). The visualization is available in two versions:

1. **Python Version** 🐍: Using the Pyvis library for easy creation and export of interactive network visualizations.
2. **JavaScript Version** 🌐: Using D3.js for creating a custom, interactive web visualization.

## 🚀 Features

- **Interactive Graph** 🔄: Explore character relationships in an interactive network format.
- **Color-Coded Nodes** 🎨: Nodes are color-coded by the character's role (Hero, Villain, etc.).
- **Dynamic Layout** 🌟: The graph uses force-directed layouts to automatically arrange nodes and links.
- **Labels** 🏷️: Each node has a label showing the character’s name and role.

## 🛠️ Technologies Used

- **Python (Pyvis)** 🐍: Used for generating an interactive HTML visualization of the network graph.
- **JavaScript (D3.js)** 🌐: Provides a customizable, interactive web visualization of the network.
- **HTML/CSS** 💻: Used for structuring and styling the D3.js-based web visualization.


### Python Version 🐍

- **Node Colors 🎨**: Modify the `role_colors` dictionary to adjust the colors for different character roles (Hero, Villain, etc.).
- **Node Size 🟢**: The size of the nodes is based on the degree (number of neighbors), but you can modify it to make them larger or smaller.
- **Background and Styling 🌑**: Customize the background color, font, and general styling using Pyvis’s built-in options.

### JavaScript Version (D3.js) 🌐

- **Node Colors 🎨**: The `roleColors` object controls the color for each character’s role. You can modify it to adjust the node colors.

  ```javascript
  const roleColors = {
    "Hero": "rgba(116, 185, 255, 0.95)", // Light Blue
    "Villain": "rgba(231, 112, 85, 0.95)", // Light Red
    "Mentor": "rgba(0, 206, 201, 0.95)", // Light Cyan
    "Rebel": "rgba(108, 92, 231, 0.95)", // Light Purple
    "Politician": "rgba(99, 110, 114, 0.95)", // Light Gray
    "Lieutenant": "rgba(223, 230, 233, 0.95)" // Light White
  };
  ```

- **Node Size 🟢**: Modify the `r` attribute when appending nodes to adjust their size.
- **Link Distance 🌉**: Modify the `distance` parameter in the `d3.forceLink()` method to change the spacing between nodes.

## 🧑‍🤝‍🧑 Example Data

The following is an example of how the nodes and links are structured in both versions:

### Nodes (Characters) 👤

```javascript
const nodes = [
    { id: "Vi", role: "Hero", faction: "Zaun", status: "Alive" },
    { id: "Jinx", role: "Villain", faction: "Zaun", status: "Alive" },
    // More characters...
];
```

### Links (Relationships) 🔗

```javascript
const links = [
    { source: "Vi", target: "Jinx", relationship: "Sisters" },
    { source: "Vi", target: "Caitlyn", relationship: "Allies" },
    // More relationships...
];
```

## 📜 License

This project is licensed under the MIT License 


---
