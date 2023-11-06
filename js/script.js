const teamMember = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        img: "walter-gordon-office-manager.jpg",
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        img: "scott-estrada-developer.jpg",
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg",
    },
]

let card = "";

for (i = 0; i < teamMember.length; i++) {
    const curMember = teamMember[i];
    card += `
        <div class="col-3">
            <div class="card text-center">
                <img src="img/${curMember.img}" class="card-img-top" alt="">
                <div class="card-body">
                    <h2 class="card-title">
                        ${curMember.name}
                    </h2>
                    <p class="card-text">
                        ${curMember.role}
                    </p>
                </div>
            </div>
        </div>
    `;
}

console.log(card);

document.getElementById("card").innerHTML = card;
