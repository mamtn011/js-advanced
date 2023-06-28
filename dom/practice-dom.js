const body = document.querySelector("body");
const div = document.createElement("div");
const mp = document.createElement("h1");
const lp = document.createElement("ul");
const lc = document.createElement("li");
div.className = "container";
mp.className = "h1";
lp.className = "product-collection m-3";
lc.className = "product-collection-item";
div.id = "container";
lc.id = "sample";
body.append(div);
mp.appendChild(document.createTextNode("Product List"));
div.append(mp);
div.append(lp);
lc.appendChild(document.createTextNode("Shoes"));
lp.append(lc);

{
  /* <div class="container" id="container">
  <h1 class="h1">Product List</h1>
  <ul class="product-collection m-3">
    <li class="product-collectiom-item" id="sample">Shoes</li>
  </ul>
</div> */
}
