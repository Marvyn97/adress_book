/*******************************************************************************************/
/********************************** FONCTIONS UTILITAIRES **********************************/
/*******************************************************************************************/

function loadDataFromDomStorage(name) {
	

	/*
	 * Donnée simple (chaîne) -> JSON parse (= désérialisation) -> Donnée complexe
	 *
	 * Voir ci-dessous pour plus d'explications sur le pourquoi du JSON.
	*/
	
}

function saveDataToDomStorage(key, value) {
	/*
	 * Le DOM storage ne permet pas de stocker des données complexes (objet, tableau...).
	 * On doit donc d'aborder sérialiser nos données dans un format simple, le JSON.
	 *
	 * On obtient une chaîne représentant l'objet complexe, et c'est cette chaîne que
	 * l'on stocke dans le DOM storage.
	 *
	 * Donnée complexe -> JSON stringify (= sérialisation) -> Donnée simple (chaîne)
	*/
	
}