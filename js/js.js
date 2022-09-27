/**
 * file: js/js.js
 */
console.log("Hi from js/js.js")

//universal menu bar
const theMenu = `
    <div class="bar">
        <aside>
            <ul>
                <li><a href="menu.html"> Menu </a></li>
                <li><a href="about-us.html">About Us</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </aside>
    </div>
`
//console.log(theMenu)
document.getElementById("bar").innerHTML = theMenu

const foot = `
    <footer> 
    <small>&copy; Bizzare Pizza, 2022</small>
    </footer>
`

document.getElementById("footer").innerHTML = `
    <div class="fu">
    ${foot}
    </div>
    
    `