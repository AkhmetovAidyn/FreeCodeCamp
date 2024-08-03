// Add Flex Superpowers to the Tweet Embed
// To the right is the tweet embed that will be used as a practical example. Some of the elements would look better with a different layout. The last challenge demonstrated display: flex. Here you'll add it to several components in the tweet embed to start adjusting their positioning.
//
// Add the CSS property display: flex to all of the following items - note that the selectors are already set up in the CSS:
//
//     header, the header's .profile-name, the header's .follow-btn, the header's h3 and h4, the footer, and the footer's .stats.

//
// <style>
//     body {
//     font - family: Arial, sans-serif;
// }
//     header {
//     display: flex;
// }
//     header .profile-thumbnail {
//     width: 50px;
//     height: 50px;
//     border-radius: 4px;
// }
//     header .profile-name {
//     display: flex;
//     margin-left: 10px;
// }
//     header .follow-btn {
//     display: flex;
//     margin: 0 0 0 auto;
// }
//     header .follow-btn button {
//     border: 0;
//     border-radius: 3px;
//     padding: 5px;
// }
//     header h3, header h4 {
//     display: flex;
//     margin: 0;
// }
//     #inner p {
//     margin - bottom: 10px;
//     font-size: 20px;
// }
//     #inner hr {
//     margin: 20px 0;
//     border-style: solid;
//     opacity: 0.1;
// }
//     footer {
//     display: flex;
// }
//     footer .stats {
//     display: flex;
//     font-size: 15px;
// }
//     footer .stats strong {
//     font - size: 18px;
// }
//     footer .stats .likes {
//     margin - left: 10px;
// }
//     footer .cta {
//     margin - left: auto;
// }
//     footer .cta button {
//     border: 0;
//     background: transparent;
// }
// </style>
// <header>
//     <img src="https://cdn.freecodecamp.org/curriculum/legacy-css-flexbox/quincy-twitter-photo.jpg"
//          alt="Quincy Larson's profile picture" className="profile-thumbnail"/>
//     <div className="profile-name">
//         <h3>Quincy Larson</h3>
//         <h4>@ossia</h4>
//     </div>
//     <div className="follow-btn">
//         <button>Follow</button>
//     </div>
// </header>
// <div id="inner">
//     <p>I meet so many people who are in search of that one trick that will help them work smart. Even if you work smart,
//         you still have to work hard.</p>
//     <span className="date">1:32 PM - 12 Jan 2018</span>
//     <hr/>
// </div>
// <footer>
//     <div className="stats">
//         <div className="Retweets">
//             <strong>107</strong> Retweets
//         </div>
//         <div className="likes">
//             <strong>431</strong> Likes
//         </div>
//     </div>
//     <div className="cta">
//         <button className="share-btn">Share</button>
//         <button className="retweet-btn">Retweet</button>
//         <button className="like-btn">Like</button>
//     </div>
// </footer>