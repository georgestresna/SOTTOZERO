// const iteme=[
//     {
//         nume:'MENIU BURGER EPIC DREAMS',
//         gramaj:'600',
//         ingrediente:'chifla, chiftea vita+porc, somon fume, mix branzeturi, ceapa, rosii cherry, soscheddar, ardei iute, salate, sosuri + cartofi aromatizati',
//         pret:'40.00',
//         img:'epic-dreams.jpg'
//     },
//     {
//         nume:'MENIU BURGER COLONEL',
//         gramaj:'600',
//         ingrediente:'chifla, chiftea vita+porc, bacon, mix branzeturi, ceapa prajita, rosii uscate, salate, sosuri, jalapeno + cartofi aromatizati',
//         pret:'35.00',
//         img:'colonel.jpg'
//     },
//     {
//         nume:'MENIU BURGER MAIOR',
//         gramaj:'600',
//         ingrediente:'chifla, chiftea vita+porc, bacon, mix branzeturi, ceapa prajita, rosii uscate, salate, sosuri + cartofi aromatizati',
//         pret:'35.00',
//         img:'maior.jpg'
//     },
//     {
//         nume:'QUESADILLA',
//         gramaj:'350',
//         ingrediente:'lipie, carne de pui/porc, branzeturi, salate, sosuri, ceapa aromatizata, jalapeno',
//         pret:'26.00',
//         img:'quesadilla.jpg'
//     },
//     {
//         nume:'BURRITO PUI/PORC',
//         gramaj:'450',
//         ingrediente:'lipie, carne de pui/porc, branzeturi, mix Mexican, salate, sosuri, jalapeno',
//         pret:'28.00',
//         img:'burrito.jpg'
//     },
//     {
//         nume:'PIZZA BURGER',
//         gramaj:'800',
//         ingrediente:'blat de cartofi prajiti, sos branzeturi, carne vita+porc, bacon, sosuri, salata, jalapeno',
//         pret:'35.00',
//         img:'pizza-burger.jpg'
//     },
//     {
//         nume:'PIZZA NACHOS',
//         gramaj:'500',
//         ingrediente:'blat nachos, sos branzeturi, carne de pui, sosuri, jalapeno',
//         pret:'40.00',
//         img:'pizza-nachos.jpg'
//     },
//     {
//         nume:'PIZZA SOTTOZERO',
//         gramaj:'800',
//         ingrediente:'blat de cartofi prajiti,sos de branzeturi,carne de porc + pui +vita, sosuri, salata, jalapeno',
//         pret:'40.00',
//         img:'pizza_sottozero.jpg'
//     },
// ]

const iteme_glovo=[
    //meniuri
    [{
        nume:'Meniu Epic Dreams',
        gramaj:'500',
        ingrediente:'Chifla, chiftea vita si porc, somon afumat, mix branzeturi, salata, roșii cherry, ceapa prajita, jalapeno, sos cheddar, cartofi prăjiți, ardei iute proaspat. Recomandari: cel mai picant - 550g',
        pret:'45.00',
        img:'epic_dreams.webp',
        color:'#D73B3B'
    },
    // {
    //     nume:'Meniu Chimicurri',
    //     gramaj:'500',
    //     ingrediente:'Chifla, carne vita + porc, bacon, salata, rosii cherry, ceapa, jalapeno, mix branzeturi, sosuri(chimicurri), Cartofi prajiti',
    //     pret:'45.00',
    //     img:'chimicurri.webp',
    //     color:'#D73B3B'
    // },
    {
        nume:'Meniu Maior',
        gramaj:'500',
        ingrediente:'Chifla, chiftea vita porc, mix branzeturi, salata, ceapa prajita, sosuri, cartofi prăjiți',
        pret:'40.00',
        img:'maior.webp',
        color:'#D73B3B'
    },
    {
        nume:'Meniu Gran Sabor',
        gramaj:'500',
        ingrediente:'Chifla, chiftea vita si porc, bacon, cheddar, fasole, ceapa roșie, ardei gras, porumb, jalapeno, sosuri, cartofi prăjiți, salata',
        pret:'40.00',
        img:'gran_sabor.webp',
        color:'#D73B3B'
    },
    {
        nume:'Meniu General',
        gramaj:'500',
        ingrediente:'Chifla, chiftea porc, bacon, mix branzeturi, ou, salata, ceapa, roșii cherry, jalapeno, sosuri, cartofi prăjiți',
        pret:'45.00',
        img:'general.webp',
        color:'#D73B3B'
    },
    {
        nume:'Meniu Fresco',
        gramaj:'500',
        ingrediente:'Chifla, chiftea vita si porc, bacon, cheddar, salata, ceapa, roșii cherry, ardei gras, castraveți, sosuri, cartofi prăjiți',
        pret:'40.00',
        img:'fresco.webp',
        color:'#D73B3B'
    },
    {
        nume:'Meniu Colonel',
        gramaj:'500',
        ingrediente:'Chifla, chiftea vita si porc, bacon, mix branzeturi, salata, ceapa prajita, jalapeno, roșii, sosuri, cartofi prăjiți',
        pret:'40.00',
        img:'colonel.webp',
        color:'#D73B3B'
    },
    {
        nume:'Meniu Burger Clasic',
        gramaj:'500',
        ingrediente:'Chifla, chiftea vita si porc, bacon, cheddar, ceapa, roșii, castraveți murati, cartofi prăjiți, salata',
        pret:'40.00',
        img:'clasic.webp',
        color:'#D73B3B'
    },
    // {
    //     nume:'Meniu Amiral Burger',
    //     gramaj:'500',
    //     ingrediente:'cartofi prajiti, carne tocata de vita, chifla, carne ton, somon afumat, creveti, mozzarella, rosii, salata, castraveti proaspeti, ardei gras, ceapa, maioneza, ketchup',
    //     pret:'_.__',
    //     img:'',
    //     color:'#D73B3B'
    // },
    // {
    //     nume:'Meniu Maresal Burger',
    //     gramaj:'500',
    //     ingrediente:'cartofi prajiti, carne tocata de vita, chifla, carne oaie, bacon, cheddar, rosii, salata, castraveti murati, ardei gras, ceapa, maioneza, ketchup, mustar',
    //     pret:'_.__',
    //     img:'',
    //     color:'#D73B3B'
    // },
    // {
    //     nume:'Meniu Crispy',
    //     gramaj:'330',
    //     ingrediente:'Carne de pui, ou, pesmet, cartofi prajiti aromatizati',
    //     pret:'25.00',
    //     img:'',
    //     color:'#D73B3B'
    // },
    // {
    //     nume:'Meniu Sandwich Pui/ Porc/ Ceafa Afumata',
    //     gramaj:'450',
    //     ingrediente:'Chifla, chips mix branzeturi, pulpa de pui grill/ ceafa de porc grill/ ceafa de porc afumata, salata iceberg, ketchup, maioneza de casa, Cartofi prajiti aromatizati',
    //     pret:'22.00',
    //     img:'',
    //     color:'#D73B3B'
    // }
],
    // burgeri
    // [{
    //     nume:'Burger Epic Dreams',
    //     gramaj:'450',
    //     ingrediente:'Chifla, carne vita + porc, somon fume, mix branzeturi, ceapa prajita, rosii cherry, sos cheddar, ardei iute, salata iceberg, sosuri',
    //     pret:'40.00',
    //     img:'epic-dreams.jpg',
    //     color:'#364B94'
    // },
    // {
    //     nume:'Burger General',
    //     gramaj:'450',
    //     ingrediente:'Chifla, carne vita + porc, mix branzeturi, ou, bacon, rosii uscate, ceapa prajita, salata iceberg, sosuri',
    //     pret:'40.00',
    //     img:'',
    //     color:'#364B94'
    // },
    // {
    //     nume:'Burger Colonel',
    //     gramaj:'450',
    //     ingrediente:'Chiflă ,carne de vită + porc, mix brânzeturi, salată iceberg, sosuri, rosii uscate, ceapă prăjită, bacon, jalapeno',
    //     pret:'35.00',
    //     img:'colonel.jpg',
    //     color:'#364B94'
    // },
    // {
    //     nume:'Burger Maior',
    //     gramaj:'450',
    //     ingrediente:'Chiflă ,carne de vită + porc, mix brânzeturi, salată iceberg, sosuri, rosii uscate, ceapă prăjită, bacon',
    //     pret:'35.00',
    //     img:'maior.jpg',
    //     color:'#364B94'
    // },
    // {
    //     nume:'Burger Clasic',
    //     gramaj:'450',
    //     ingrediente:'Chifla, chiftea vita + porc, cheddar, salata iceberg, ceapa rosie, castraveti in otet, maioneza de casa, ketchup, mustar',
    //     pret:'35.00',
    //     img:'',
    //     color:'#364B94'
    // }],
    //burgeri mini
    // [{
    //     nume:'Mini Epic Dreams',
    //     gramaj:'300',
    //     ingrediente:'Chifla, carne vita + porc, somon fume, mix branzeturi, ceapa prajita, rosii cherry, sos cheddar, ardei iute, salata iceberg, sosuri',
    //     pret:'27.00',
    //     img:'',
    //     color:'rgb(44, 91, 44)'
    // },
    // {
    //     nume:'Mini General',
    //     gramaj:'300',
    //     ingrediente:'Chifla, carne vita + porc, mix branzeturi, ou, bacon, rosii uscate, ceapa prajita, salata iceberg, sosuri',
    //     pret:'25.00',
    //     img:'',
    //     color:'rgb(44, 91, 44)'
    // },
    // {
    //     nume:'Mini Colonel',
    //     gramaj:'300',
    //     ingrediente:'Chiflă ,carne de vită + porc, mix brânzeturi, salată iceberg, sosuri, rosii uscate, ceapă prăjită, bacon, jalapeno',
    //     pret:'23.00',
    //     img:'',
    //     color:'rgb(44, 91, 44)'
    // },
    // {
    //     nume:'Mini Maior',
    //     gramaj:'300',
    //     ingrediente:'Chiflă ,carne de vită + porc, mix brânzeturi, salată iceberg, sosuri, rosii uscate, ceapă prăjită, bacon',
    //     pret:'23.00',
    //     img:'',
    //     color:'rgb(44, 91, 44)'
    // },
    // {
    //     nume:'Mini Clasic',
    //     gramaj:'300',
    //     ingrediente:'Chifla, chiftea vita + porc, cheddar, salata iceberg, ceapa rosie, castraveti in otet, maioneza de casa, ketchup, mustar',
    //     pret:'20.00',
    //     img:'',
    //     color:'rgb(44, 91, 44)'
    // }],
    //pizza
    [{
        nume:'PIZZA BURGER',
        gramaj:'700',
        ingrediente:'Blat de cartofi prăjiți, carne de vita, carne de porc, mix branzeturi, jalapeno, sosuri, ceapa prajita, sos cheddar',
        pret:'45.00',
        img:'pizza_burger.webp',
        color:'rgb(227, 147, 0)'
    },
    {
        nume:'PIZZA NACHOS',
        gramaj:'500',
        ingrediente:'Blat de Nachos, carne de pui, mix branzeturi, jalapeno, sos cheddar, sosuri',
        pret:'45.00',
        img:'pizza_nachos.webp',
        color:'rgb(227, 147, 0)'
    },
    //     {
    //     nume:'PIZZA GRAN SABOR',
    //     gramaj:'600',
    //     ingrediente:'cartofi prajiti, carne vita, carne porc, bacon, mozzarella, cheddar,fasole, porumb,, castraveti murati, ardei gras, jalapeno, ceapa, ketchup, sos barbeque, sos chilli',
    //     pret:'_.__',
    //     img:'',
    //     color:'rgb(227, 147, 0)'
    // },
    {
        nume:'PIZZA SOTTOZERO',
        gramaj:'500',
        ingrediente:'Blat de nachos, carne de pui, carne de vita, carne de porc, mix branzeturi, jalapeno, sos cheddar, sosuri',
        pret:'45.00',
        img:'pizza_sottozero.webp',
        color:'rgb(227, 147, 0)'
    }],
    //burito si quesadilla
    [{
        nume:'Quesadilla Gran Sabor',
        gramaj:'400',
        ingrediente:'Lipie, carne de pui, carne de vita, carne de porc, mix branzeturi, jalapeno, fasole, ceapa roșie, ardei gras, porumb',
        pret:'30.00',
        img:'q_gran_sabor.webp',
        color:'#928940'
    },
    // {
    //     nume:'Quesadilla de Pollo',
    //     gramaj:'350',
    //     ingrediente:'lipie, carne de pui, mix branzeturi, fasole, ardei gras, porumb, jalapeno, ceapa, cheddar topit',
    //     pret:'32.00',
    //     img:'q_pollo.webp',
    //     color:'#928940'
    // },
    {
        nume:'Quesadilla Burger',
        gramaj:'400',
        ingrediente:'Lipie, carne de vita, carne de porc, mix branzeturi, jalapeno, mfasole, ceapa roșie, ardei gras, porumb, sos cheddar',
        pret:'30.00',
        img:'q_burger.webp',
        color:'#928940'
    },
    {
        nume:'BURRITO de Pollo',
        gramaj:'400',
        ingrediente:'Lipie, carne de pui, mix branzeturi, jalapeno, fasole, ceapa roșie, ardei gras, porumb',
        pret:'30.00',
        img:'b_pollo.webp',
        color:'#928940'
    },
    {
        nume:'Chimicurri Burger',
        gramaj:'550',
        ingrediente:'Chifla, chiftea vita si porc, salata, roșii cherry, sos chimichurri, cartofi prăjiți',
        pret:'40.00',
        img:'chimicurri.webp',
        color:'#928940'
    },
    {
        nume:'BURRITO Gran Sabor',
        gramaj:'400',
        ingrediente:'Lipie, carne de vita, carne de pui, carne de porc, mix branzeturi, fasole, ceapa roșie, ardei gras, porumb, jalapeno, sosuri',
        pret:'32.00',
        img:'b_gran_sabor.webp',
        color:'#928940'
    }],
    //shaorma
    [{
        nume:'Shawarma burger Sottozero',
        gramaj:'400',
        ingrediente:'Lipie, carne de vita, salata, roșii cherry, ceapa, castraveți murati, jalapeno, sosuri, cartofi prăjiți',
        pret:'28.00',
        img:'shawarma1.webp',
        color:'rgb(59, 146, 114)'
    },
    {
        nume:'Shawarma pui',
        gramaj:'400',
        ingrediente:'Lipie, carne de pui, salata, roșii cherry, ceapa, castraveți murati, varza, sosuri, cartofi prăjiți',
        pret:'28.00',
        img:'shawarma2.webp',
        color:'rgb(59, 146, 114)'
    },]
    //sandwich
    // [{
    //     nume:'Sandwich cu Pui/ Porc/ Ceafa Afumata',
    //     gramaj:'300',
    //     ingrediente:'Chifla, pulpa de pui grill/ ceafa de porc la grill/ ceafa afumata, chips branzeturi, salata iceberg, ketchup, maioneza de casa',
    //     pret:'17.00',
    //     img:'',
    //     color:'rgb(59, 146, 114)'
    // },
    // {
    //     nume:'Toast Sottozero',
    //     gramaj:'200',
    //     ingrediente:'Paine toast, ceafa afumata, cascaval, sosul casei',
    //     pret:'10.00',
    //     img:'',
    //     color:'rgb(59, 146, 114)'
    // }],
]

function renderJS(path,order){

const myContent1 = document.querySelector(path);

window.addEventListener("DOMContentLoaded", function () {
    const showInHtml = iteme_glovo[order].map((project) => {
        return `
        <div class="meal" style="background-color:${project.color};">
        <img src="meniu_prod/${project.img}" alt="">
        <div class="content">
            <div class="text">
                <h3>${project.nume}</h3>
                <h3 class="price">${project.pret} lei</h3>
            </div>
            <p>cca. ${project.gramaj} g</p>
            <p>${project.ingrediente}</p>
        </div>
        </div>`;
    })
myContent1.innerHTML = showInHtml;
});
};

renderJS('.options .meniu_meniu',0);
// renderJS('.options .meniu_burgeri',1);
// renderJS('.options .meniu_miniburgeri',2);
renderJS('.options .meniu_pizza',1);
renderJS('.options .meniu_buritoquesadilla',2);
renderJS('.options .meniu_shawarma',3);
// renderJS('.options .meniu_sandwich',5);