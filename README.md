# Breast Cancer Awareness

A single-page static website providing information on breast cancer symptoms, detection, self-examination, risk factors, prevention, and further resources.

![breast_cancer_awareness_1](https://github.com/user-attachments/assets/295ac29d-8c65-4219-8745-2a19cba50b14)
![breast_cancer_awareness_2](https://github.com/user-attachments/assets/ebaffd44-fef8-4634-9fa8-adc8a979ec31)

## Sections

- **Home** — brief introduction to the site's purpose
- **Symptoms & Detection** — common warning signs (lumps, changes in size/shape, nipple discharge, skin changes, pain)
- **Self-Examination Guide** — a short step-by-step guide for performing a breast self-exam
- **Risk Factors & Prevention** — general lifestyle steps that may help reduce risk
- **Resources** — external links to the [American Cancer Society](https://www.cancer.org/cancer/breast-cancer.html) and [Breastcancer.org](https://www.breastcancer.org/) for further reading

## Tech stack

Plain HTML, CSS, and vanilla JavaScript — no framework, build step, or dependencies.

## Features

- Anchor-link navigation between sections
- A `setTimeout`-based reminder alert (fires 5 seconds after page load) prompting users to perform a self-exam
- A `sharePage()` function using the [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share) (falls back to an alert on unsupported browsers) — note this function is defined in `script.js` but isn't currently called from any element in `index.html`, so a share button/link would need to be added to trigger it

## Running locally

No build step or server required — just open `index.html` directly in a browser:

```bash
open index.html   # macOS
# or
xdg-open index.html   # Linux
```

Or serve it locally if you prefer:

```bash
npx serve .
```

## Project structure

```
BreastCancerAwareness-main/
├── index.html
├── style.css
└── script.js
```

## Disclaimer

This site is for general awareness and educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Anyone with concerns about symptoms or personal risk should consult a qualified healthcare provider.

## License

Not specified.
