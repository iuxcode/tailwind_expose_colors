function ({ addBase, theme }) {
  function extractColorVars(colorObj, colorGroup = "") {
    return Object.keys(colorObj).reduce((vars, colorKey) => {
      const value = colorObj[colorKey];
      const cssVariable =
        colorKey === "DEFAULT"
          ? `--color${colorGroup}`
          : `--color${colorGroup}-${colorKey}`;

      const newVars =
        typeof value === "string"
          ? { [cssVariable]: value }
          : extractColorVars(value, `-${colorKey}`);

      return { ...vars, ...newVars };
    }, {});
  }

  function filterCustomColors(colors) {
    const customColors = {};
    const customColorKeys = ["custom1", "custom2"]; // Add your custom color keys here

    customColorKeys.forEach((key) => {
      if (colors[key]) {
        customColors[key] = colors[key];
      }
    });

    return customColors;
  }

  addBase({
    ":root": extractColorVars(filterCustomColors(theme("colors"))),
  });
}
