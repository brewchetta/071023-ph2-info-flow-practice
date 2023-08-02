# Information Flow Practice

## Getting Started

Fork and clone the repository. Run `npm install` followed by `npm start`.

## Deliverables

1. In the `GamesList` component map over the `gamesArray` and display a `GameCard` for each of them being sure to pass the proper props.

2. When the user clicks on one of the three buttons it filters games by whether they're played, unplayed, or shows all. This will require passing information between the `SearchBarHeader` and the `GamesList`.

As a BONUS: change the styling for the buttons to indicate which one is currently active.

3. Remove the previous filter functionality. When the user types into the search bar, filter videogames in the `GamesList` so that only those with a matching genre can be seen. Both the `SearchBarHeader` and the `GamesList` are children of `App` which means you'll have to think about where state goes and how to effectively pass information.

4. Merge the filter functionality from deliverables 3 and 4 (HINT: you can do this with a single filter, you'll probably still need two pieces of state).
