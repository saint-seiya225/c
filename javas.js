const panier = [];

const produits = [
    { id: 1, nom: "Poisson", prix: 500, image: "images/poisson.jpg" },
    { id: 2, nom: "Poisson(2)", prix: 300, image: "images/poisson(2).jpg" },
    { id: 3, nom: "Poisson", prix: 600, image: "images/poisson.jpg" },
    // Ajouter d'autres produits ici
];

const panierItemsContainer = document.getElementById('panier-items');
const totalElement = document.getElementById('total');
const viderPanierBtn = document.getElementById('vider-panier');

function ajouterAuPanier(produitId) {
    const produit = produits.find(p => p.id === produitId);
    panier.push(produit);
    afficherPanier();
}

function supprimerDuPanier(produitId) {
    panier.splice(panier.findIndex(p => p.id === produitId), 1);
    afficherPanier();
}

function calculerTotal() {
    let total = 0;
    panier.forEach(produit => {
        total += produit.prix;
    });
    totalElement.textContent = total;
}

function afficherPanier() {
    panierItemsContainer.innerHTML = '';
    if (panier.length === 0) {
        panierItemsContainer.textContent = "Votre panier est vide.";
    } else {
        panier.forEach(produit => {
            const produitElement = document.createElement('div');
            produitElement.innerHTML = `
                <img src="${produit.image}" alt="${produit.nom}" style="max-width: 50px;">
                ${produit.nom} - ${produit.prix} FCFA
                <button onclick="supprimerDuPanier(${produit.id})">Supprimer</button>
            `;
            panierItemsContainer.appendChild(produitElement);
        });
    }
    calculerTotal();
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const produitId = parseInt(button.parentElement.parentElement.getAttribute('data-produit-id'));
        ajouterAuPanier(produitId);
    });
});

viderPanierBtn.addEventListener('click', () => {
    panier.length = 0;
    afficherPanier();
});

afficherPanier();