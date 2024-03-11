# couchsurfing-exercise

Demonstates the usage of static site generation, client side rendering, and server side rendering

Assumptions: User that is logged in is userId = 1

`/profile` route will show the users information

`/posts` will show posts with the option to show All posts or only your friends posts

`/posts/[id]` will show detailed view of posts for specific id. Route/Page has been statically generated at build time using generateStaticParams()

To run locally use `npm run dev`
