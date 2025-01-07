# Pixicons

**Pixicons** is a collection of pixelated icons designed specifically for React applications, perfect for enhancing your UI/UX projects with a retro flair.

## Installation

To install Pixicons, run the following command:

```bash
npm i pixicons
```

## Usage

Here’s how you can use Pixicons in your React components:

```jsx
import { HomeIcon } from "pixicons";

function App() {
  return <HomeIcon size={20} />;
}
```

## Contributing

Pixicons is an **open-source** project, and contributions are welcome! To collaborate, please follow these guidelines:

1. Create icons using **LibreSprite** or **Aseprite** at a size of **16 x 16 px**, leaving a **2-pixel margin**.
2. Convert your pixel art to **SVG** using the following tool: [SVG Converter](https://codepen.io/shshaw/pen/XbxvNj).
3. Manually create the React components based on the existing structure in the project.
4. Export your new components in the barrel file located in the `src` directory.

## License

This project is licensed under the **MIT License**.

