// Fonction pour basculer entre le menu enfant et adulte
function toggleChildMenu(typeSelect) {
    var childMenuDiv = document.getElementById("child-menu");
    var platSelect = document.getElementById("Plat");

    if (typeSelect.value === "Enfant") {
        childMenuDiv.style.display = "block";  // Afficher le menu enfant
        platSelect.disabled = true;  // Désactiver le choix du plat adulte
    } else {
        childMenuDiv.style.display = "none";  // Cacher le menu enfant
        platSelect.disabled = false;  // Activer le choix du plat adulte
    }
}
