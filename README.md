# Sergey Agafonov - Photo Albums Demo App

## Build and Start

    npm i
    npm start

should suffice

## Trade-offs and assumptions

- I added just a few tests as an example, so code coverage is far from 100%
- I added a very rudimentary "authentication/authorization" mechanism (I felt it was natural for this kind of app)
- flat file structure: for a small app like this I felt it would be an overkill to create more folders
- no Redux or MobX: for a small app like this I felt it would be an overkill to use any comprehensive state management
- no spinners or loading indicators
- in "Photos" component, search input perhaps could be refactored into a separate component
- accessibility and responsiveness could be improved
- PropTypes or TypeScript could be added for strict type checking
- overall it's not exactly "production quality" code (more of a "working prototype" quality that can be reasonably achieved in under 4 hours)
- there was no time for beautiful custom styling, unfortunately, so I just quickly threw some Bootstrap on it, I can style it with Vanilla CSS as a separate follow-up task, if you like
