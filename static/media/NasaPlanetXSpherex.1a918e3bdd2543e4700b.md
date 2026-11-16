## Explore change in the infrared sky

The **NASA Planet X — SPHEREx Sky Time-Lapse Viewer** is a focused hackathon prototype for exploring released SPHEREx observations and comparing how infrared brightness changes between two dates.

Users can choose a position on a 360° sky map or enter right ascension and declination manually, find available observations through NASA/IPAC IRSA, and select an exact **From** and **To** epoch. The application then builds an aligned scientific comparison designed to surface interesting regions for follow-up.

> The viewer identifies follow-up candidates. It does not claim confirmed planets, transients, or moving objects.

## Main features

- Interactive all-sky SPHEREx map covering spectral channels 2–102
- Visual sky-position selection and manual RA/Dec input
- Live searches across released SPHEREx DR1 and QR3 observations
- Exact two-epoch selection with quick or custom date ranges
- Aligned observation frames, animated time-lapse, and brightness-change heatmap
- Plain-language results with an expandable technical analysis
- Candidate cards with coordinates, polarity, significance, and quality information
- Downloadable PDF reports, scientific JSON data, and animated GIF files
- High-contrast, keyboard-friendly, responsive interface with reduced-motion support

## Scientific pipeline

The Python pipeline performs a conservative comparison rather than relying on a simple image subtraction:

1. Validates the required FITS image, flag, variance, and wavelength data.
2. Removes zodiacal-light estimates when they are available.
3. Rejects invalid or quality-flagged pixels.
4. Reprojects the second observation onto the celestial WCS of the first.
5. Matches comparable wavelengths and image resolution.
6. Protects unreliable image edges and corrects the shared background offset.
7. Propagates and calibrates uncertainty against measured residual noise.
8. Detects only candidates that pass both residual-strength and significance thresholds.

The blue–white–red result is a **brightness-change heatmap**, not a temperature map: blue regions became dimmer, red regions became brighter, and white regions show little measured change.

## Architecture and technologies

The browser interface communicates with a **Flask** application that handles IRSA archive searches, cached FITS cutouts, and analysis jobs. Reusable Python modules implement the astronomy workflow with **Astropy**, **NumPy**, **SciPy**, **Reproject**, and **Matplotlib**.

The full application can query live data and run the processing pipeline locally. A separate static presentation offers a reliable server-free demo of the prepared analysis.

## Meet team AstroPic

![Astropic team](./Mdimg/astropic.png)

This project was created by **AstroPic**, a team in which every member contributed their own ideas, knowledge, and effort. From the scientific research and data-processing pipeline to the web experience, testing, and presentation, everyone played an important part and added their own piece to the final result.

From left to right in the photo:

1. [zisisdiamantop](https://github.com/zisisdiamantop)
2. [Asterios-d](https://github.com/Asterios-d)
3. [Klajdi (me)](https://github.com/Klajdis32)
4. [FotisVard](https://github.com/FotisVard)

## Try the project

- [Open the live static demo](https://klajdis32.github.io/NASA-Planet-X-SPHEREx-Challenge/)
- [View the source code on GitHub](https://github.com/Klajdis32/NASA-Planet-X-SPHEREx-Challenge)

SPHEREx data products and archive services are provided by NASA/IPAC IRSA. This is an independent hackathon project and not an official NASA or IRSA application.
