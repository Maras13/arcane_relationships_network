
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

## 📥 Setup Instructions

### Python Version (Using Pyvis) 🐍

1. **Install Required Libraries 📦**:

   If you don’t have Pyvis and NetworkX installed, you can install them using pip:

   ```bash
   pip install pyvis networkx
   ```

2. **Run the Python Script 🎬**:

   The `arcane_relationship_viz.py` script generates the interactive visualization and saves it as an HTML file.
   
   Run the script:

   ```bash
   python arcane_relationship_viz.py
   ```

   The HTML file (`arcane_visualization_with_title_once.html`) will be generated in the same directory.

3. **View the Visualization 👀**:

   Open the HTML file in a web browser to explore the network.

### JavaScript Version (Using D3.js) 🌐

1. **Clone the Repository 📥**:

   ```bash
   git clone https://github.com/your-username/arcane-relationship-viz.git
   cd arcane-relationship-viz
   ```

2. **Open the HTML File 🖥️**:

   Open the `arcane-relationships.html` file in any modern web browser (Chrome, Firefox, Safari).

   ```bash
   open arcane-relationships.html
   ```

   Alternatively, double-click on the file to open it in a browser.

3. **Explore the Visualization 🔍**:

   The graph will render with character names displayed on the nodes. You can interact with the graph by dragging nodes around to explore different relationships.

## 🎨 Customization Options

You can customize both the Python and JavaScript versions of the visualization as follows:

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

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **D3.js** and **Pyvis** for enabling the creation of interactive and customizable visualizations.
- The creators of *Arcane* for providing an interesting set of characters and relationships to visualize.

---
