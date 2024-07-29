// Change the Font Size of an Element
// Font size is controlled by the font-size CSS property, like this:
//
// h1 {
//     font-size: 30px;
// }
// Inside the same <style> tag that contains your red-text class, create an entry for p elements and set the font-size to 16 pixels (16px).


import React from "react";

<style>
    .red-text {
    color: red;
}
    p {
    font-size: 16px;
}
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
    <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

    <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
                     alt="A cute orange cat lying on its back."></a>

    <div>
        <p>Things cats love:</p>
        <ul>
            <li>catnip</li>
            <li>laser pointers</li>
            <li>lasagna</li>
        </ul>
        <p>Top 3 things cats hate:</p>
        <ol>
            <li>flea treatment</li>
            <li>thunder</li>
            <li>other cats</li>
        </ol>
    </div>

    <form action="https://freecatphotoapp.com/submit-cat-photo">
        <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
        <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
        <label><input type="checkbox" name="personality" checked> Loving</label>
        <label><input type="checkbox" name="personality"> Lazy</label>
        <label><input type="checkbox" name="personality"> Energetic</label><br>
        <input type="text" placeholder="cat photo URL" required>
            <button type="submit">Submit</button>
    </form>
</main>

