# Air Control

Your Mac. At your fingertips. A native macOS app for pointing, clicking, scrolling and switching desktops using hand gestures and your camera.

**[Explore the website](https://pathakcodes.github.io/air-control/) · [Download the free beta](https://github.com/pathakcodes/air-control/releases/latest/download/Air-Control-0.6.0-arm64.dmg) · [Installation guide](https://pathakcodes.github.io/air-control/#install)**

## Current beta

- Version 0.6.0, Apple silicon only (M1 and later), macOS 13+.
- 22 gesture lessons with articulated 3D guides, practice playground and per-action tests.
- Floating camera feed and gesture feedback across apps and desktops.
- Hand tracking runs locally with Apple Vision. No account, cloud processing or camera recording.
- Native Liquid Glass on macOS 26+, frosted materials on earlier supported versions.

## Install

1. Download the DMG from [Releases](https://github.com/pathakcodes/air-control/releases/latest). Open it, drag Air Control to Applications, eject the image and launch from Applications.
2. This free beta is ad-hoc signed, without Apple notarization. If blocked, and you trust the download, try opening it, then use System Settings → Privacy & Security → Open Anyway. See [Apple's guidance](https://support.apple.com/en-us/102445).
3. Start the camera and grant Camera access. Use Practice to learn the gestures.
4. Enable Mac control, allow Air Control under Privacy & Security → Accessibility, then return and enable control again.
5. For desktop gestures, create at least two desktops and enable default Control–Arrow shortcuts under Keyboard → Keyboard Shortcuts → Mission Control. Show Desktop uses F11.

Pause with a closed fist held for one second or **Control + Option + Command + Space**. Live control never starts automatically after relaunch. After an update, macOS may require refreshing the app's existing Accessibility entry.

## Compatibility

Mouse actions use ordinary system events. Navigation depends on target-app support and your keyboard shortcuts. Zoom uses keyboard steps in Safari, Chrome, Edge, Firefox and Preview. Rotation is limited to Preview's 90-degree shortcuts. This app does not add a touchscreen, haptics or pressure sensing. Recognition quality varies with light, camera, hand position and distance.

## Feedback

[Open an issue](https://github.com/pathakcodes/air-control/issues) with your macOS version, camera, gesture and what happened. Avoid sharing private camera images. If you like the project, **star this repository** to help people discover it.

## This repository

This repository contains the public product website and download releases. The native app's Swift source is not included here. The site is dependency-free HTML, CSS and JavaScript, served with GitHub Pages from the root of `main`.

To preview locally: `python3 -m http.server 4173`, then visit `http://localhost:4173`.

Screenshots show the actual 0.6.0 app with its camera off. The animated web gesture illustration is explanatory, not live hand tracking. Air Control is an independent project, not affiliated with Apple.
