const iteme=[
    {
        nume:'MENIU BURGER EPIC DREAMS',
        gramaj:'600',
        ingrediente:'chifla, chiftea vita+porc, somon fume, mix branzeturi, ceapa, rosii cherry, soscheddar, ardei iute, salate, sosuri + cartofi aromatizati',
        pret:'40.00',
        img:'epic dreams.png'
    },
    {
        nume:'MENIU BURGER COLONEL',
        gramaj:'600',
        ingrediente:'chifla, chiftea vita+porc, bacon, mix branzeturi, ceapa prajita, rosii uscate, salate, sosuri, jalapeno + cartofi aromatizati',
        pret:'35.00',
        img:'colonel.png'
    },
    {
        nume:'MENIU BURGER MAIOR',
        gramaj:'600',
        ingrediente:'chifla, chiftea vita+porc, bacon, mix branzeturi, ceapa prajita, rosii uscate, salate, sosuri + cartofi aromatizati',
        pret:'35.00',
        img:'maior.png'
    },
    {
        nume:'QUESADILLA',
        gramaj:'350',
        ingrediente:'lipie, carne de pui/porc, branzeturi, salate, sosuri, ceapa aromatizata, jalapeno',
        pret:'26.00',
        img:'quesadilla.png'
    },
    {
        nume:'BURRITO PUI/PORC',
        gramaj:'450',
        ingrediente:'lipie, carne de pui/porc, branzeturi, mix Mexican, salate, sosuri, jalapeno',
        pret:'28.00',
        img:'burrito.png'
    },
    {
        nume:'PIZZA BURGER',
        gramaj:'800',
        ingrediente:'blat de cartofi prajiti, sos branzeturi, carne vita+porc, bacon, sosuri, salata, jalapeno',
        pret:'35.00',
        img:'pizza burger.png'
    },
    {
        nume:'PIZZA NACHOS',
        gramaj:'500',
        ingrediente:'blat nachos, sos branzeturi, carne de pui, sosuri, jalapeno',
        pret:'40.00',
        img:'pizza nachos.png'
    },
    {
        nume:'PIZZA SOTTOZERO',
        gramaj:'800',
        ingrediente:'blat de cartofi prajiti,sos de branzeturi,carne de porc + pui +vita, sosuri, salata, jalapeno',
        pret:'40.00',
        img:'pizza nachos.png'
    },
]


const myContent = document.querySelector(".options");

window.addEventListener("DOMContentLoaded", function () {
    const showInHtml = iteme.map((project) => {
        return `
        <div class="meal">
        <img src="meniu_prod/${project.img}" alt="">
        <div class="content">
            <div class="text">
                <h3>${project.nume}</h3>
                <h3>CCA ${project.gramaj}gr</h3>
                <h3 class="price">${project.pret} lei</h3>
            </div>
            <p>${project.ingrediente}</p>
        </div>
        </div>`;
    })
myContent.innerHTML = showInHtml;
});