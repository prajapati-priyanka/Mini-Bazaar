# Technical Decisions

## Architectural Decision

One decision I had to make was how to handle colors, sizes, stock status, and thumbnails since the Fake Store API does not provide any of that information.

One option was to merge this additional UI data with the product data after fetching it from the API and create a single product model containing everything. The other option was to keep the API data and UI-specific data separate.

I decided to keep them separate and created a metadata file for colors, sizes, stock status, and thumbnails. This kept the original API response untouched and made it easier to distinguish between data coming from the API and data added only for UI functionality.

## What I Would Improve With More Time

My main focus was getting the required functionality working first, so there are a few things I would improve if I had more time.

The first would be test coverage. Currently, there are no automated tests. I would add tests for important flows such as adding items to the cart, updating quantities, removing items, and verifying cart persistence in localStorage.

I would also spend more time polishing the UI. The current design is functional, but there is still room to improve spacing, responsiveness, and overall visual consistency.

Another improvement would be connecting thumbnails to the selected color. Right now, all colors use the same thumbnail gallery because the Fake Store API only provides a single image per product. With a richer metadata structure, each color could have its own image set, making the product details page feel more realistic.
