const menu=[
{
    id:1,
    title:"buttermilk pancakes",
    category:"breakfast",
    price:200,
    img: "https://img.freepik.com/free-photo/delicious-photorealistic-pancakes-with-strawberries_23-2151042558.jpg?t=st=1713851278~exp=1713854878~hmac=e870ea69a3d76f8aa410e5d48e3f8fbe8e1dccdd5c09eb71701b8d6d766bfbea&w=996",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
},
{
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "https://img.freepik.com/premium-photo/traditional-delicious-turkish-food-rice-with-chickpeas-chicken-turkish-name-tavuklu-nohutlu-pilav-pilaf_693630-19710.jpg?w=996",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "https://img.freepik.com/free-photo/front-view-oh-hands-holding-glass-milkshake_23-2148296043.jpg?t=st=1713854948~exp=1713858548~hmac=278393e4a8b6af95110ea1900d5a01f765564f4ef4014bd2fc6c32bfcf93a815&w=360",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "https://img.freepik.com/free-photo/top-view-sliced-sandwich-with-meat-vegetables-grey-background-meal-sandwich-burger-food_140725-80413.jpg?t=st=1713858530~exp=1713862130~hmac=ce24a763bf3a1b3538c11794a3749e183a763769475f50b3f4c0ba41a3345d4b&w=996",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "https://img.freepik.com/free-photo/top-view-scrambled-eggs-with-sausages-greens-bread-loafs-dark-surface_140725-49518.jpg?t=st=1713858456~exp=1713862056~hmac=5ca973ba2b7156336b4c1a093f649a9bb5a9c60213d853532fefe643a905da18&w=996",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "https://img.freepik.com/free-photo/strawberry-ice-cream-with-waffle-oreo_140725-8819.jpg?t=st=1713854999~exp=1713858599~hmac=d2d431101bc47965e0e8bbfbb3038f503e561d6446d8be713e463baf12c6a8dc&w=740",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "https://img.freepik.com/free-photo/front-view-sliced-vegetable-meal-colorful-tasty-inside-white-plate-along-with-crisps-eggs-grey-table-dish-vegetables_140725-16109.jpg?t=st=1713858574~exp=1713862174~hmac=12ce7c05ae21264a325641846d52e0d5b9085a95ef73a6e9f570a4d26579028d&w=360",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "https://img.freepik.com/free-photo/closeup-shot-delicious-pasta-white-plate_181624-28817.jpg?t=st=1713855059~exp=1713858659~hmac=b0dc25df96509371487744b6468c827e705fb553a1bdfdb4deedebbeaa139de4&w=996",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "https://img.freepik.com/free-photo/front-view-dessert-glass-with-straws-colorful-topping_23-2148603253.jpg?t=st=1713855033~exp=1713858633~hmac=358a4f4a5df67819796816b13d438e4630d39350aa1a63b5159063a91310566e&w=360",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 39.99,
    img: "https://img.freepik.com/free-photo/grilled-salmon-prawn-steak_74190-5269.jpg?t=st=1713855092~exp=1713858692~hmac=c87ce3ebc06913d1bae7aef3c7a9412ee9b1dae88043550f38ff433b4e9823ea&w=996",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },

]
const sectionCenter = document.querySelector(".section-center");
const filterBtns=document.querySelectorAll(".filter-btn")

window.addEventListener("DOMContentLoaded",function(){
    displayMenuItems(menu);
    
});
    // load buttons
    filterBtns.forEach((btn)=>{
        btn.addEventListener("click",function(e){           
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItems){
                if (menuItems.category === category){
                    return menuItems;
                }
            })
            if(category === "all" ){
                displayMenuItems(menu);
            }
            else{
                displayMenuItems(menuCategory)
            }
        });
    })

    // load items
    function displayMenuItems(menuItems){
        

    let displayMenu = menuItems.map((item) => {
        return `<article class="menu-item">
        <img src= ${item.img} class="photo" alt=${item.title} />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </header>
          <p class="item-text">
          ${item.desc}
          </p>
        </div>
      </article>`;
    });


displayMenu = displayMenu.join("");
sectionCenter.innerHTML=displayMenu;
}


